import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/future/image';

import Stripe from 'stripe';
import { stripe } from '../lib/stripe';

import { useKeenSlider } from 'keen-slider/react';

import { HomeContainer, Product } from '../styles/pages/home';

import 'keen-slider/keen-slider.min.css';

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[];
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });
  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className='keen-slider'>
        {products.map((product) => {
          return (
            <Link
              key={product.id}
              href={`product/${product.id}`}
              prefetch={false}
            >
              <Product className='keen-slider__slide'>
                <Image src={product.imageUrl} width={520} height={480} alt='' />

                <footer>
                  <div>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </div>
                  <button>
                    <svg
                      width='32'
                      height='32'
                      viewBox='0 0 32 32'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M5.9 7.50031H26.1V9.00031L26.107 7.50032C26.7177 7.50319 27.3063 7.72832 27.763 8.13363C28.2197 8.53894 28.5132 9.09669 28.5885 9.70264L28.5909 9.72241L30.3655 25.719C30.3656 25.7197 30.3656 25.7205 30.3657 25.7212C30.4048 26.069 30.3704 26.4212 30.2648 26.7549C30.1589 27.0892 29.9839 27.3976 29.751 27.6599C29.5182 27.9222 29.2328 28.1326 28.9133 28.2774C28.5938 28.4222 28.2475 28.4981 27.8967 28.5003L27.8875 28.5003H4.10328C3.75254 28.4981 3.40618 28.4222 3.08671 28.2774C2.76724 28.1326 2.48181 27.9222 2.24897 27.6599C2.01614 27.3976 1.8411 27.0893 1.73523 26.7549C1.6296 26.4212 1.59521 26.069 1.63428 25.7212C1.63436 25.7205 1.63445 25.7198 1.63453 25.719L3.40915 9.72241L3.41148 9.70264C3.48685 9.0967 3.78031 8.53895 4.237 8.13363C4.69369 7.72832 5.28236 7.50319 5.89296 7.50032L5.9 7.50031ZM25.6588 10.5003H6.34126L4.67719 25.5003H27.3228L25.6588 10.5003Z'
                        fill='white'
                      />
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M16 5.50031C15.0717 5.50031 14.1815 5.86905 13.5251 6.52543C12.8687 7.18181 12.5 8.07205 12.5 9.00031V13.0003C12.5 13.8287 11.8284 14.5003 11 14.5003C10.1716 14.5003 9.5 13.8287 9.5 13.0003V9.00031C9.5 7.2764 10.1848 5.6231 11.4038 4.40411C12.6228 3.18512 14.2761 2.50031 16 2.50031C17.7239 2.50031 19.3772 3.18512 20.5962 4.40411C21.8152 5.6231 22.5 7.2764 22.5 9.00031V13.0003C22.5 13.8287 21.8284 14.5003 21 14.5003C20.1716 14.5003 19.5 13.8287 19.5 13.0003V9.00031C19.5 8.07205 19.1313 7.18181 18.4749 6.52543C17.8185 5.86905 16.9283 5.50031 16 5.50031Z'
                        fill='white'
                      />
                    </svg>
                  </button>
                </footer>
              </Product>
            </Link>
          );
        })}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100),
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 10,
  };
};
