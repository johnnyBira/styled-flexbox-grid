import { number, string, func, oneOfType, objectOf } from 'prop-types';

export const gridConfig = { // eslint-disable-line
  rowWidth: oneOfType([objectOf(number), number]),
  gutter: oneOfType([
    oneOfType([objectOf(number), number]),
    oneOfType([objectOf(string), string]),
  ]),
  columnCount: number,
  breakpoints: objectOf(number),
};

export const styledFlexboxGrid = {
  breakpoints: oneOfType([objectOf(number), number]),
  rowWidth: oneOfType([objectOf(number), number]),
  gutter: oneOfType([
    oneOfType([objectOf(number), number]),
    oneOfType([objectOf(string), string]),
  ]),
  columnCount: number,
  getColumnWidth: func,
  getGutterWidth: func,
};
