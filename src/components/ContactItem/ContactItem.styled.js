import { styled } from 'styled-components';

export const ContactItemEl = styled('li')({
  minWidth: '400px',
  minHeight: '60px',
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  padding: '10px',
  position: 'relative',
  overflow: 'hidden',

  '&:hover': {
    boxShadow: 'inset 0 0 8px 1px #454545',
  },
});

export const ContactFavorite = styled('button')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingLeft: '10px',
  paddingRight: '20px',

  position: 'relative',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    right: '0px',
    height: '80%',
    width: '1px',
    background: '#000',

    transform: 'translateY(-50%)',
  },

  '& svg': {
    fontSize: '22px',
    fill: '#aeaeae',
  },
  '&:is(:hover,:focus)': {
    '& > svg': {
      fill: '#fa0',
      fontWeight: 700,

      transform: 'scale(1.2)',
    },
  },
});

export const ContactData = styled('div')({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  paddingRight: '20px',
  justifyContent: 'space-between',
  position: 'relative',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    right: '0px',
    height: '80%',
    width: '1px',
    background: '#000',

    transform: 'translateY(-50%)',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-15px',
    left: '0',
    width: '125%',
    height: '2px',
    border: 'none',
    borderRadius: '4px',

    transform: 'translateX(-99%)',
    transition: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',

    background: '#000',
    boxShadow: '0 1px 0 0 #454545',
  },
  'li:hover &::after': {
    transform: 'translateX(-20%)',
  },
});

export const ContactName = styled('span')({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  fontSize: '20px',
  fontWeight: '600',
  lineHeight: '1.4',
});
export const ContactNumber = styled('span')({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  fontSize: '18px',
  fontWeight: '600',
  lineHeight: '1.4',
});

export const ContactDelete = styled('button')({
  width: '40px',
  height: '40px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  borderRadius: '50%',
  border: 'transparent',
  transition:
    'backgroundColor  0.3s cubic-bezier(0.4, 0, 0.2, 1),width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  overflow: 'hidden',
  fontWeight: '600',

  '& > svg': {
    fontSize: '28px',
    fill: '#955',
    transition:
      'fill  0.3s cubic-bezier(0.4, 0, 0.2, 1),font-size 0.2s cubic-bezier(0.4, 0, 0.2, 1),transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
  },

  '&::before': {
    display: 'none',

    content: '"Delete"',
    color: '#bbb',
    opacity: '0',
    transition:
      'opacity  0.3s cubic-bezier(0.4, 0, 0.2, 1),transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  },

  '&:is(:hover, :focus)': {
    width: '110px',
    maxHeight: '100%',
    padding: '8px 4px',
    borderRadius: '50px',
    transition:
      'backgroundColor  0.3s cubic-bezier(0.4, 0, 0.2, 1),width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    backgroundColor: 'rgb(255, 69, 69)',

    '& svg': {
      fontSize: '18px',
      fill: '#bbb',
      transform: 'rotate(360deg)',
    },
    '&::before': {
      display: 'block',
      paddingRight: '5px',
      fontSize: '16px',
      opacity: '1',
    },
  },
});

export const ContactChange = styled('button')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '5px',
  '& svg': {
    fontSize: '18px',
    fill: '#aeaeae',
    transition:
      'fill 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  },

  '&:is(:hover,:focus)': {
    '& > svg': {
      fill: '#34974d',
      fontWeight: 700,

      transform: 'scale(1.2)',
    },
  },
});
