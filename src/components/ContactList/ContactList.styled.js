import { styled } from 'styled-components';

export const ContactListStyled = styled('ul')({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  width: '80%',
  maxWidth: '900px',
  height: '300px',
  overflow: 'auto',
  marginTop: '20px',
  padding: '5px',
});

export const EmptyEl = styled('span')({
  marginTop: '40px',
  fontSize: '28px',
});
