import { ButtonContainer } from '../styles/components/CartButton';
import IconCartButton from '../assets/icon-cart-button.svg';
import Image from 'next/future/image';
import { useShoppingCart } from 'use-shopping-cart';

export function CartButton() {
  const { cartCount, handleCartClick } = useShoppingCart();

  return (
    <ButtonContainer onClick={handleCartClick}>
      <Image src={IconCartButton} alt='Ver carrinho de compras' />
      <span>{cartCount}</span>
    </ButtonContainer>
  );
}
