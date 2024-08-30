import { style } from '@vanilla-extract/css';

export const gameHeaderTextCN = style({
    margin: 0
  })

export const containerCN = style({
    width: '500px',
    border: '1px solid #ccc',
    padding: '12px',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9'
})

export const containerHeaderCN = style({
    padding: '15px 0',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
})

export const squareCN = style({
    width: 'calc(100% - 4px)',
    aspectRatio: '1 / 1',
    border: '2px solid #bdbdbd',
    borderRadius: '4px',
    cursor: 'pointer',

    transition: 'border 200ms ease-out'
})

export const _coloredCN = style({
    backgroundColor: 'var(--bg-color)',
    ':hover': {
        border: '2px solid #121212',
    }
})

export const _disabledCN = style({
    backgroundColor: '#afafaf',
    cursor: 'default',
    ':hover': {
        border: '2px solid #bdbdbd',
    }
})

export const _selectedCN = style({
    border: '2px solid #121212'
})

export const squareContainerCN = style({
    display: 'grid',
    width: '100%',
    gap: '3px',
    gridTemplateColumns: `repeat(var(--columns), 1fr)`,
    gridTemplateRows: `repeat(var(--rows), 1fr)`,
})