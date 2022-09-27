import { DebugCart } from 'use-shopping-cart';
import { AppProps } from 'next/app';
import { globalStyles } from '../styles/global';

globalStyles();

import { Container } from '../styles/pages/app';

import { CartSidebar } from '../components/CartSidebar';
import { Header } from '../components/Header';
import { CartProvider } from '../contexts/CartContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <CartProvider>
        <Header />
        <CartSidebar />
        <Component {...pageProps} />
        {/* <DebugCart style={{ background: '#202024' }} /> */}
      </CartProvider>
    </Container>
  );
}
