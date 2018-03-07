export const getVerticalAlignment = val => (
  {
    center: 'center',
    bottom: 'flex-end',
    top: 'flex-start',
  }[val] || 'normal'
);

// Column mixins
export const alignSelf = (val) => {
  const alignment = getVerticalAlignment(val);

  return `align-self: ${alignment};`;
};

export const order = index => `
  order: ${index};
`;

export const span = (size, fixed) => `
  flex-basis: ${fixed ? 1 : size};
  max-width: ${size};
`;

export const grow = size => `
  width: auto;
  max-width: none !important;
  flex-grow: ${size};
`;

export const shrink = size => `
  width: auto;
  max-width: none !important;
  flex-shrink: ${size};
`;

export const offset = offsetVal => (`
  position: relative;
  margin-left: ${offsetVal};
  `);

export const gutter = gutterVal => `
  padding-right: ${gutterVal};
  padding-left: ${gutterVal};
  `;

export const noGutter = (val = false) => (
  val ? `
    padding-left: 0 !important;
    padding-right: 0 !important;
  ` :
    null
);

export const hidden = val => (
  val ? 'display: none;' : 'display: block;'
);

export const position = (pos = 'static') => `position: ${pos};`;

// Row mixins
export const justifyValues = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  around: 'space-around',
  between: 'space-between',
  evenly: 'space-evenly',
  normal: 'normal',
  initial: 'initial',
};

export const justify = val => (`
  justify-content: ${justifyValues[val] || 'normal'};
  `);

export const directionValues = {
  column: 'column',
  columnReverse: 'column-reverse',
  row: 'row',
  rowReverse: 'row-reverse',
  reverse: 'row-reverse',
  unset: 'unset',
  initial: 'initial',
};

export const direction = val => (`
  flex-direction: ${directionValues[val] || 'row'} !important;
  `);

export const alignValues = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
};

export const rowWidth = (val, fullWidth) => (
  !fullWidth && `max-width: ${val}px;`
);

export const alignColumns = val => (`
  align-items: ${alignValues[val] || 'normal'};
  `);

export const debug = () => `
  background: line-gradient(from left, red 0, red 100%);
`;

// export const verticalAlignColumns = (val) => {
//   const alignment = getVerticalAlignment(val);
//
//   return `align-items: ${alignment}`;
// };

export const sideMargin = val => (`
  width: calc(100% - ${val});
  padding-left: 0 ${val};
  padding-right: 0 ${val};
  `);
