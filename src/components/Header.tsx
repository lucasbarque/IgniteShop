import Image from 'next/future/image';
import { HeaderContainer } from '../styles/components/Header';
import { CartButton } from '../components/CartButton';

import logoImg from '../assets/logo.svg';

interface HeaderProps {
  withCart: boolean;
}

export function Header({ withCart = true }: HeaderProps) {
  return (
    <HeaderContainer withCart={withCart}>
      <Image src={logoImg} alt='' />
      {withCart && <CartButton />}
    </HeaderContainer>
  );
}
