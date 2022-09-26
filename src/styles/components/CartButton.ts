import { styled } from '..';

export const ButtonContainer = styled('button', {
  border: 'none',
  backgroundColor: '$gray800',
  borderRadius: 6,
  position: 'relative',
  padding: '0.75rem',
  cursor: 'pointer',

  svg: {
    width: '24px',
    height: '24px',
  },

  span: {
    position: 'absolute',
    top: '-10px',
    right: '-10px',

    backgroundColor: '$green500',
    color: '$white',
    borderRadius: '100%',
    width: '24px',
    height: '24px',
    border: '3px solid $gray900',

    fontSize: '0.875rem',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
