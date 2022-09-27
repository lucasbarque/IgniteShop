import Image from 'next/future/image';
import { HeaderContainer } from '../styles/components/Header';
import { CartButton } from '../components/CartButton';

import logoImg from '../assets/logo.svg';
import Link from 'next/link';

interface HeaderProps {
  withCart?: boolean;
}

export function Header({ withCart = true }: HeaderProps) {
  return (
    <HeaderContainer withCart={withCart}>
      <Link href='/'>
        <a>
          <Image src={logoImg} alt='' />
        </a>
      </Link>
      {withCart && <CartButton />}
    </HeaderContainer>
  );
}
