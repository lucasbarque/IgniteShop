import { AppProps } from 'next/app';
import { globalStyles } from '../styles/global';

globalStyles();

import { Container } from '../styles/pages/app';

import { CartSidebar } from '../components/CartSidebar';
import { Header } from '../components/Header';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header withCart={false} />
      <CartSidebar />
      <Component {...pageProps} />
    </Container>
  );
}
