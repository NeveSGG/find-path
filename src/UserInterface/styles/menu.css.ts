import { style } from '@vanilla-extract/css';

export const menuCN = style({
  width: '350px',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  border: '1px solid #ccc',
  borderRadius: '8px',
  backgroundColor: '#f9f9f9',
});

export const menuHeadingCN = style({
  fontSize: '24px',
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: '20px',
});

export const menuButtonCN = style({
  width: '100%',
  padding: '10px 0',
  fontSize: '16px',
  marginBottom: '10px',
  border: 'none',
  borderRadius: '4px',
  backgroundColor: '#007bff',
  color: '#fff',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: '#0056b3',
  },
});

export const menuFlexContainerCN = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '8px',
  marginBottom: '15px',
  flexWrap: 'wrap',
})

export const menuFlexItemCN = style({
  width: 'calc(calc(calc(100% - 8px) / 2) - 2px)',
  height: '60px',
  textAlign: 'center',
  border: '1px solid #cacaca',
  borderRadius: '5px',
  cursor: 'pointer',
  ':hover': {
    border: '1px solid grey',
  }
})

export const menuFlexItemTextCN = style({
  margin: 0,
  ':first-child': {
    marginTop: '8px'
  }
})