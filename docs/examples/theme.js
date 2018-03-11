import grid from '../../src';
const bps = {
  xxs: 0,
  xs: 320,
  s: 576,
  m: 768,
  l: 992,
  xl: 1200,
  xxl: 1400,
};

const theme = {
  styledFlexboxGrid: grid({
    rowWidth: 1200,
    gutter: '12px',
    columnCount: 12,
    breakpoints: bps,
  }),
};

export default theme;
