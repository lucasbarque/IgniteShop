import { GetServerSideProps } from 'next';
import Image from 'next/future/image';
import Head from 'next/head';
import Link from 'next/link';
import Stripe from 'stripe';
import { stripe } from '../lib/stripe';
import {
  SuccessContainer,
  ImageContainer,
  ProductList,
} from '../styles/pages/success';

interface SuccessProps {
  customerName: string;
  product: {
    name: string;
    imageUrl: string;
  };
}

export default function Success({ customerName, product }: SuccessProps) {
  const quantity = 1;
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name='robots' content='noindex' />
      </Head>

      <SuccessContainer>
        {quantity > 1 ? (
          <ProductList>
            <ImageContainer>
              <Image src={product.imageUrl} width={120} height={110} alt='' />
            </ImageContainer>
            <ImageContainer>
              <Image src={product.imageUrl} width={120} height={110} alt='' />
            </ImageContainer>
            <ImageContainer>
              <Image src={product.imageUrl} width={120} height={110} alt='' />
            </ImageContainer>
          </ProductList>
        ) : (
          <ImageContainer>
            <Image src={product.imageUrl} width={120} height={110} alt='' />
          </ImageContainer>
        )}

        <h1>Compra efetuada!</h1>

        <p>
          {quantity > 1 ? (
            <>
              Uhuul <strong>{customerName}</strong>, sua compra de {quantity}{' '}
              camisetas já está a caminho da sua casa.
            </>
          ) : (
            <>
              Uhuul <strong>{customerName}</strong>, sua{' '}
              <strong>{product.name}</strong> já está a caminho da sua casa.
            </>
          )}
        </p>

        <Link href='/'>Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  });

  const customerName = session.customer_details.name;
  const product = session.line_items.data[0].price.product as Stripe.Product;

  return {
    props: {
      customerName,
      product: {
        name: product.name,
        imageUrl: product.images[0],
      },
    },
  };
};
