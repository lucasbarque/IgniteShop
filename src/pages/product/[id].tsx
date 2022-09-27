import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/future/image';
import Head from 'next/head';
import { useState } from 'react';
import Stripe from 'stripe';
import { filterCart, useShoppingCart } from 'use-shopping-cart';
import { stripe } from '../../lib/stripe';
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
  Button,
} from '../../styles/pages/product';

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    defaultPriceId: string;
    priceAmount: number;
  };
}

export default function Product({ product }: ProductProps) {
  const { cartDetails, addItem, removeItem, clearCart } = useShoppingCart();

  const productExistsInCart = cartDetails[product.id] !== undefined;

  async function handleBuyButton() {
    if (productExistsInCart) {
      removeItem(product.id);
    } else {
      addItem({
        name: product.name,
        description: product.description,
        id: product.id,
        price: product.priceAmount,
        currency: 'BRL',
        image: product.imageUrl,
      });
    }
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt='' />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <Button onClick={handleBuyButton} remove={productExistsInCart}>
            {!productExistsInCart ? 'Colocar na sacola' : 'Remover da sacola'}
          </Button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: 'prod_MTBY5aavNGiTLr' } }],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount / 100),
        description: product.description,
        defaultPriceId: price.id,
        priceAmount: price.unit_amount,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hours
  };
};
