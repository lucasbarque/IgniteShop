import { useRouter } from 'next/router';
import React from 'react';

export default function Product() {
  const { query } = useRouter();
  return <h1>{JSON.stringify(query)}</h1>;
}