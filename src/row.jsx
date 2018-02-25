import React from 'react';
import { withTheme } from 'styled-components';
import { node, bool, shape, objectOf, oneOf, oneOfType, string } from 'prop-types';
import styled from 'styled-components';
import withResponsiveProps from 'responsive-props'; // eslint-disable-line
import * as propTypes from './propTypes';
// import getstyledFlexboxGrid from './HOC/getstyledFlexboxGrid';
import {
  justify,
  justifyValues,
  alignColumns,
  alignValues,
  sideMargin,
  direction,
  directionValues,
  debug,
  rowWidth as rowWidthMixin,
} from './utils/mixins';

const StyledRow = styled.div`
  box-sizing: content-box;
  width: 100%;
  ${({ center }) => center && 'margin: 0 auto;'}
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

  const { breakpoints, rowWidth, getGutterWidth } = styledFlexboxGrid;

  const RowhResponsiveProps = withResponsiveProps(StyledRow, {
    align: alignColumns,
    justify,
    sideMargin,
    direction,
    rowWidth: args => rowWidthMixin(args, fullWidth),
    debug: args => debug(props.debug, getGutterWidth(args), styledFlexboxGrid),
  });

  return (
    <RowhResponsiveProps
      styledFlexboxGrid={styledFlexboxGrid}
      align={props.align}
      justify={props.justify}
      fullWidth={props.fullWidth}
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
  fullWidth: bool,
  center: bool,
  debug: bool,
  // Responsive props
  styledFlexboxGrid: shape(propTypes.styledFlexboxGrid),
  align: oneOfType([oneOf(validAlignProps), objectOf(oneOf(validAlignProps))]),
  justify: oneOfType([oneOf(validJustifyProps), objectOf(oneOf(validJustifyProps))]),
  direction: objectOf(oneOf(validDirectionProps)),
};


Row.propTypes = rowPropTypes;

Row.defaultProps = {
  children: null,
  styledFlexboxGrid: {},
  align: undefined,
  justify: undefined,
  direction: undefined,
  fullWidth: false,
  center: true,
  debug: false,
};

const GridRow = withTheme(Row);
GridRow.displayName = 'Row';
GridRow.propTypes = rowPropTypes;
export default GridRow;
