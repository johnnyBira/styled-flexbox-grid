import React from 'react';
import styled, { withTheme } from 'styled-components';
import { node, bool, shape, objectOf, oneOf, oneOfType } from 'prop-types';
import withResponsiveProps from 'responsive-props'; // eslint-disable-line
import * as propTypes from './propTypes';
// import getstyledFlexboxGrid from './HOC/getstyledFlexboxGrid';
import {
  justify,
  justifyValues,
  alignColumns,
  alignValues,
  sideMargin,
  center,
  direction,
  directionValues,
  debug,
  rowWidth as rowWidthMixin,
} from './utils/mixins';

const StyledRow = styled.div`
  box-sizing: content-box;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;

  ${({ responsiveProps }) => responsiveProps}
`;

const Row = (props) => {
  const {
    children,
    theme: { styledFlexboxGrid },
    fullWidth,
  } = props;

  const {
    breakpoints, rowWidth, getGutterWidth, getColumnWidth,
  } = styledFlexboxGrid;
  console.log(props.theme);

  const RowhResponsiveProps = withResponsiveProps(StyledRow, {
    align: alignColumns,
    justify,
    sideMargin,
    direction,
    center,
    rowWidth: args => rowWidthMixin(args, fullWidth),
    debug: args => debug(props.debug, getGutterWidth(args), getColumnWidth),
  });

  return (
    <RowhResponsiveProps
      styledFlexboxGrid={styledFlexboxGrid}
      align={props.align}
      justify={props.justify}
      rowWidth={rowWidth}
      center={props.center}
      direction={props.direction}
      debug={styledFlexboxGrid.gutter}
      breakpoints={breakpoints}
    >
      {children}
    </RowhResponsiveProps>
  );
};

export const validJustifyProps = Object.keys(justifyValues);
export const validDirectionProps = Object.keys(directionValues);
export const validAlignProps = Object.keys(alignValues);

const rowPropTypes = {
  children: node,
  fullWidth: oneOfType([objectOf(bool), bool]),
  center: oneOfType([objectOf(bool), bool]),
  debug: bool,
  // Responsive props
  theme: shape({
    styledFlexboxGrid: shape(propTypes.styledFlexboxGrid),
  }),
  align: oneOfType([oneOf(validAlignProps), objectOf(oneOf(validAlignProps))]),
  justify: oneOfType([oneOf(validJustifyProps), objectOf(oneOf(validJustifyProps))]),
  direction: oneOfType([
    objectOf(oneOf(validDirectionProps)),
    oneOf(validDirectionProps),
  ]),
};


Row.propTypes = rowPropTypes;

Row.defaultProps = {
  children: null,
  align: undefined,
  justify: undefined,
  direction: undefined,
  theme: shape({}),
  fullWidth: false,
  center: true,
  debug: false,
};

const GridRow = withTheme(Row);
GridRow.displayName = 'Row';
GridRow.propTypes = rowPropTypes;
export default GridRow;
