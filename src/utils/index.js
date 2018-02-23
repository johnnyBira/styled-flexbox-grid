export const getColumnWidth = (columnCount, rowWidth, size, fixed = false) => (
  fixed ? `${String((size / columnCount) * rowWidth)}px` : `${(size / columnCount) * 100}%`
);

export const gutterCalc = (gutterBase, multiplier = 1) => {
  return (gutterBase * multiplier) / 2;
};

const defaultConfig = {
  columnCount: 12,
  rowWidth: 1200,
  gutterBase: 1,
  gutterUnit: 'rem',
};

export default (config = {}) => {
  const mergedConfig = { ...defaultConfig, ...config };
  const { columnCount, rowWidth, gutterBase, gutterUnit } = mergedConfig;

  return {
    getColumnWidth: (size, fixed) => getColumnWidth(columnCount, rowWidth, size, fixed),
    getGutterWidth: (size) => `${gutterCalc(gutterBase, size)}${gutterUnit}`,
  };
};
