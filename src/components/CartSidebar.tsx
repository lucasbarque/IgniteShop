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

import imgCamiseta from '../assets/camisetas/1.png';
import { useState } from 'react';

export function CartSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CartSidebarContainer isOpen={isOpen}>
      <CloseButton>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M19.5455 4.4545C19.9848 4.89384 19.9848 5.60616 19.5455 6.0455L6.0455 19.5455C5.60616 19.9848 4.89384 19.9848 4.4545 19.5455C4.01517 19.1062 4.01517 18.3938 4.4545 17.9545L17.9545 4.4545C18.3938 4.01517 19.1062 4.01517 19.5455 4.4545Z'
            fill='#8D8D99'
          />
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M4.4545 4.4545C4.89384 4.01517 5.60616 4.01517 6.0455 4.4545L19.5455 17.9545C19.9848 18.3938 19.9848 19.1062 19.5455 19.5455C19.1062 19.9848 18.3938 19.9848 17.9545 19.5455L4.4545 6.0455C4.01517 5.60616 4.01517 4.89384 4.4545 4.4545Z'
            fill='#8D8D99'
          />
        </svg>
      </CloseButton>

      <h2>Sacola de compras</h2>
      <MainContainer>
        <CartContainer>
          <CartItem>
            <Image src={imgCamiseta} alt='' />

            <div>
              <h3>Camiseta Beyond the Limits</h3>
              <span>R$ 79,90</span>
              <button>Remover</button>
            </div>
          </CartItem>
          <CartItem>
            <Image src={imgCamiseta} alt='' />

            <div>
              <h3>Camiseta Beyond the Limits</h3>
              <span>R$ 79,90</span>
              <button>Remover</button>
            </div>
          </CartItem>
          <CartItem>
            <Image src={imgCamiseta} alt='' />

            <div>
              <h3>Camiseta Beyond the Limits</h3>
              <span>R$ 79,90</span>
              <button>Remover</button>
            </div>
          </CartItem>
          <CartItem>
            <Image src={imgCamiseta} alt='' />

            <div>
              <h3>Camiseta Beyond the Limits</h3>
              <span>R$ 79,90</span>
              <button>Remover</button>
            </div>
          </CartItem>
          <CartItem>
            <Image src={imgCamiseta} alt='' />

            <div>
              <h3>Camiseta Beyond the Limits</h3>
              <span>R$ 79,90</span>
              <button>Remover</button>
            </div>
          </CartItem>
          <CartItem>
            <Image src={imgCamiseta} alt='' />

            <div>
              <h3>Camiseta Beyond the Limits</h3>
              <span>R$ 79,90</span>
              <button>Remover</button>
            </div>
          </CartItem>
          <CartItem>
            <Image src={imgCamiseta} alt='' />

            <div>
              <h3>Camiseta Beyond the Limits</h3>
              <span>R$ 79,90</span>
              <button>Remover</button>
            </div>
          </CartItem>
          <CartItem>
            <Image src={imgCamiseta} alt='' />

            <div>
              <h3>Camiseta Beyond the Limits</h3>
              <span>R$ 79,90</span>
              <button>Remover</button>
            </div>
          </CartItem>
          <CartItem>
            <Image src={imgCamiseta} alt='' />

            <div>
              <h3>Camiseta Beyond the Limits</h3>
              <span>R$ 79,90</span>
              <button>Remover</button>
            </div>
          </CartItem>
        </CartContainer>
        <Footer>
          <Resume>
            <div>
              <h3>Quantidade</h3>
              <span>3 itens</span>
            </div>
            <div>
              <h3>
                <strong>Valor total</strong>
              </h3>
              <strong>R$ 270,00</strong>
            </div>
          </Resume>
          <button>Finalizar compra</button>
        </Footer>
      </MainContainer>
    </CartSidebarContainer>
  );
}
