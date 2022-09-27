import { createContext } from 'react';
import { CartProvider as ShoppingCartProvider } from 'use-shopping-cart';

interface CartContextType {}

export const CartContext = createContext({} as CartContextType);

interface CartProviderProps {
  children: React.ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const stripeKey = process.env.STRIPE_PUBLIC_KEY;

  return (
    <ShoppingCartProvider
      mode='payment'
      cartMode='client-only'
      stripe={stripeKey}
      currency='BRL'
      successUrl='/success'
      cancelUrl='/'
      billingAddressCollection={true}
    >
      {children}
    </ShoppingCartProvider>
  );
}
