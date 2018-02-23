import React from 'react';
import { node, bool, shape, objectOf, oneOf, oneOfType, string } from 'prop-types';
import styled from 'styled-components';
import withResponsiveProps from 'responsive-props'; // eslint-disable-line
import * as propTypes from './propTypes';
import getGridConfig from './HOC/getGridConfig';
import {
  justify,
  justifyValues,
  alignColumns,
  alignValues,
  sideMargin,
  direction,
  directionValues,
  debug,
} from './utils/mixins';

const StyledRow = styled.div`
  box-sizing: content-box;
  width: 100%;
  ${({ fullWidth, gridConfig: { rowWidth } }) => (
    !fullWidth && `max-width: ${rowWidth}px;`
  )}
  ${({ center }) => center && 'margin: 0 auto;'}
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;

  ${({ responsiveProps }) => responsiveProps}
`;

const Row = (props) => {
  const {
    children,
    gridConfig,
  } = props;

  const { breakpoints } = gridConfig;
  const { getGutterWidth } = gridConfig.utils;

  const RowhResponsiveProps = withResponsiveProps(StyledRow, {
    align: alignColumns,
    justify,
    sideMargin,
    direction,
    debug: args => debug(props.debug, getGutterWidth(args), gridConfig),
  });
  console.log('direction:', props.direction);

  return (
    <RowhResponsiveProps
      gridConfig={gridConfig}
      align={props.align}
      justify={props.justify}
      fullWidth={props.fullWidth}
      center={props.center}
      direction={props.direction}
      debug={gridConfig.gutter}
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
  gridConfig: shape(propTypes.gridConfig),
  align: oneOfType([oneOf(validAlignProps), objectOf(oneOf(validAlignProps))]),
  justify: oneOfType([oneOf(validJustifyProps), objectOf(oneOf(validJustifyProps))]),
  direction: objectOf(oneOf(validDirectionProps)),
};


Row.propTypes = rowPropTypes;

Row.defaultProps = {
  children: null,
  gridConfig: {},
  align: undefined,
  justify: undefined,
  direction: undefined,
  fullWidth: false,
  center: true,
  debug: false,
};

const GridRow = getGridConfig(Row);
GridRow.displayName = 'Row';
GridRow.propTypes = rowPropTypes;
export default GridRow;
