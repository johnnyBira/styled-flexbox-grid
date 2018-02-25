export const getColumnWidth = (columnCount, rowWidth, size, fixed = false) => (
  fixed ? `${String((size / columnCount) * rowWidth)}px` : `${(size / columnCount) * 100}%`
);

export const gutterCalc = (gutter) => {
  const gutterVal = parseFloat(gutter, 10);
  const gutterUnit = gutter.split(gutterVal)[1];
  return `${gutterVal / 2}${gutterUnit}`;
};

const defaultConfig = {
  columnCount: 12,
  rowWidth: 1200,
  gutter: '1rem',
  breakpoints: { xxs: 0 },
};

export default (config = {}) => {
  const mergedConfig = { ...defaultConfig, ...config };
  const {
    columnCount, rowWidth, gutter, breakpoints,
  } = mergedConfig;

  return {
    rowWidth,
    columnCount,
    breakpoints,
    gutter,
    getColumnWidth: (args, fixed) => getColumnWidth(columnCount, rowWidth, args, fixed),
    getGutterWidth: args => gutterCalc(args),
  };
};
