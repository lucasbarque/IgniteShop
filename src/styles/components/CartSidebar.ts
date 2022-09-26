import { styled } from '..';

export const CartSidebarContainer = styled('div', {
  variants: {
    isOpen: {
      true: {
        display: 'block',
      },
    },
  },
  display: 'none',
  background: '$gray800',
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 10,
  width: 480,
  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8);',
  padding: '3rem',
  overflow: 'hidden',

  h2: {
    fontSize: '$lg',
    marginTop: 24,
    marginBottom: '2rem',
  },
});

export const CloseButton = styled('button', {
  margin: '0 0 0 auto',
  display: 'block',

  background: 'transparent',
  border: 0,
  cursor: 'pointer',
  marginTop: '-24px',
  marginRight: '-24px',
});

export const CartContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  overflowY: 'scroll',
  height: '53vh',

  '&::-webkit-scrollbar': {
    width: 4,
    background: '$gray900',
    borderRadius: 4,
  },
  '&::-webkit-scrollbar-track': {
    width: '6px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '$gray300',
    borderRadius: '24px',
  },
});

export const CartItem = styled('div', {
  display: 'flex',
  gap: 20,

  img: {
    width: '100%',
    maxWidth: 100,
    height: '93px',
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%);',
    borderRadius: 8,
    padding: '0.25rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
      objectFit: 'cover',
    },
  },

  div: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    h3: {
      fontSize: '$lg',
      fontWeight: 400,
      color: '$gray300',
    },

    span: {
      fontSize: '$lg',
      fontWeight: 'bold',
      color: '$gray100',
    },

    button: {
      background: 'none',
      border: 0,
      color: '$green500',
      fontSize: '1rem',
      fontWeight: 'bold',
      textAlign: 'left',
      cursor: 'pointer',

      '&:hover': {
        color: '$green300',
      },
    },
  },
});

export const Footer = styled('footer', {
  display: 'flex',
  flexDirection: 'column',

  button: {
    background: '$green500',
    border: 0,
    borderRadius: 8,
    color: '$white',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    padding: '1.25rem 0',
    marginTop: 57,
  },
});

export const Resume = styled('div', {
  div: {
    display: 'flex',
    justifyContent: 'space-between',

    h3: {
      fontSize: '1rem',
      color: '$gray100',
      fontWeight: 400,

      strong: {
        fontSize: '$lg',
      },
    },

    span: {
      marginTop: 7,
      fontSize: '$lg',
    },

    strong: {
      marginTop: 7,
      fontSize: '$xl',
    },
  },
});

export const MainContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: 'calc(80vh)',
});
