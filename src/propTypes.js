import { number, string, shape, func } from 'prop-types';

export const gridConfig = { // eslint-disable-line
  rowWidth: number,
  gutterBase: number,
  // gutterBase: number.isRequired,
  gutterUnit: string,
  columnCount: number,
  breakpoints: shape({}),
  utils: shape({
    getColumnWidth: func,
    getGutterWidth: func,
  }),
  // columnCount: number.isRequired,
  // breakpoints: shape({}).isRequired,
};
