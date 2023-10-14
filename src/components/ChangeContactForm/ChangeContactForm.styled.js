import styled from 'styled-components';

export const InputBox = styled('div')({
  '& form': {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
});

export const ChangeInput = styled('input')({
  padding: '0 5px',
  border: 'none',
  borderRadius: '0',
  borderBottom: '2px solid #aeaeae',
  backgroundColor: 'transparent',
  color: '#aeaeae',
  fontSize: '16px',
  outline: 'transparent',

  '&:is(:hover,:focus)': {
    borderBottom: '2px solid #aeaeae',
  },
});
