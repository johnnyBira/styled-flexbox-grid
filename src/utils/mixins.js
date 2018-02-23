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

export const span = size => `
  max-width: ${size};
`;

export const push = pushVal => `
  margin-left: ${pushVal};
`;

export const pull = pullVall => `
  margin-right: -${pullVall};
`;

export const gutter = gutterVal => (`
  padding-left: ${gutterVal};
  padding-right: ${gutterVal};
`);

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

export const debug = (f, g, c) => (`
    background-image: linear-gradient(0deg, rgba(200,0,0,.2) ${c.columnCount}, transparent 20px);
    background-size:  84px 100%, 100% 24px;
  `);

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

export const alignColumns = val => (`
  align-items: ${alignValues[val] || 'normal'};
`);

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
