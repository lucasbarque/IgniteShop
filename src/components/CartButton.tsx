import { ButtonContainer } from '../styles/components/CartButton';
import IconCartButton from '../assets/icon-cart-button.svg';
import Image from 'next/future/image';

export function CartButton() {
  return (
    <ButtonContainer>
      <Image src={IconCartButton} alt='Ver carrinho de compras' />
      <span>1</span>
    </ButtonContainer>
  );
}
