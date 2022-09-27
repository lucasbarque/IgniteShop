import Image from 'next/future/image';
import {
  CartItem,
  CartSidebarContainer,
  CloseButton,
  CartContainer,
  Footer,
  Resume,
  MainContainer,
} from '../styles/components/CartSidebar';

import { useShoppingCart } from 'use-shopping-cart';

export function CartSidebar() {
  const {
    shouldDisplayCart,
    handleCloseCart,
    cartDetails,
    cartCount,
    formattedTotalPrice,
    removeItem,
    redirectToCheckout,
  } = useShoppingCart();

  async function handleBuyProducts() {
    try {
      const result = await redirectToCheckout();
      if (result?.error) {
        console.error(result);
        // setStatus('redirect-error')
      }
    } catch (error) {
      console.error(error);
      // setStatus('redirect-error')
    }
  }

  return (
    <CartSidebarContainer isOpen={shouldDisplayCart}>
      <CloseButton onClick={handleCloseCart}>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M19.5455 4.4545C19.9848 4.89384 19.9848 5.60616 19.5455 6.0455L6.0455 19.5455C5.60616 19.9848 4.89384 19.9848 4.4545 19.5455C4.01517 19.1062 4.01517 18.3938 4.4545 17.9545L17.9545 4.4545C18.3938 4.01517 19.1062 4.01517 19.5455 4.4545Z'
            fill='#8D8D99'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M4.4545 4.4545C4.89384 4.01517 5.60616 4.01517 6.0455 4.4545L19.5455 17.9545C19.9848 18.3938 19.9848 19.1062 19.5455 19.5455C19.1062 19.9848 18.3938 19.9848 17.9545 19.5455L4.4545 6.0455C4.01517 5.60616 4.01517 4.89384 4.4545 4.4545Z'
            fill='#8D8D99'
          />
        </svg>
      </CloseButton>

      <h2>Sacola de compras</h2>
      <MainContainer>
        <CartContainer>
          {Object.entries(cartDetails).map((cart) => {
            return (
              <CartItem key={cart[0]}>
                <Image src={cart[1].image} alt='' width='100' height='93' />

                <div>
                  <h3>{cart[1].name}</h3>
                  <span>{cart[1].formattedValue}</span>
                  <button onClick={() => removeItem(cart[0])}>Remover</button>
                </div>
              </CartItem>
            );
          })}
        </CartContainer>
        <Footer>
          <Resume>
            <div>
              <h3>Quantidade</h3>
              <span>
                {cartCount > 1 ? `${cartCount} itens` : `${cartCount} item`}
              </span>
            </div>
            <div>
              <h3>
                <strong>Valor total</strong>
              </h3>
              <strong>{formattedTotalPrice}</strong>
            </div>
          </Resume>
          <button onClick={handleBuyProducts}>Finalizar compra</button>
        </Footer>
      </MainContainer>
    </CartSidebarContainer>
  );
}
