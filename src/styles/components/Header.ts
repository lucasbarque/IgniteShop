import { styled } from '..';

export const HeaderContainer = styled('header', {
  variants: {
    withCart: {
      false: {
        justifyContent: 'center',
      },
    },
  },

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
});
