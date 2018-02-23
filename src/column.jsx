import React from 'react';
import { node, bool, number, shape, oneOf, oneOfType, objectOf } from 'prop-types';
import withResponsiveProps from 'responsive-props'; // eslint-disable-line
import styled from 'styled-components';
import * as propTypes from './propTypes';
import getGridConfig from './HOC/getGridConfig';
import { ProviderError } from './errors';
import {
  order,
  verticalAlignSelf,
  span,
  hidden,
  push,
  pull,
  gutter as gutterMixin,
  noGutter,
  position,
} from './utils/mixins';

const StyledColumn = styled.div`
  box-sizing: border-box;
  width: 100%;
  flex: 0 0 auto;
  ${({ responsiveProps }) => responsiveProps}}
`;

const displayName = 'Column';

const Column = (props) => {
  const {
    children,
    gridConfig,
    // Responsice props
    fixed,
  } = props;

  if (!gridConfig) {
    throw new ProviderError(displayName);
  }

  const { getColumnWidth, getGutterWidth } = gridConfig.utils;

  // Register methods to be used for responsive props
  const ColumnResponsiveProps = withResponsiveProps(StyledColumn, {
    order,
    hidden,
    position,
    noGutter,
    verticalAlign: verticalAlignSelf,
    gutter: args => gutterMixin(getGutterWidth(args)),
    span: args => span(getColumnWidth(args, fixed)),
    push: args => push(getColumnWidth(args)),
    pull: args => pull(getColumnWidth(args)),
    background: bg => () => `background: ${bg};`,
  });

  return (
    <ColumnResponsiveProps
      order={props.order}
      verticalAlign={props.verticalAlign}
      span={props.span}
      push={props.push}
      pull={props.pull}
      noGutter={props.noGutter}
      responsiveProps={props.responsiveProps}
      hidden={props.hidden}
      position={props.position}
      debug={props.debug}
      gutter={gridConfig.gutter}
      breakpoints={gridConfig.breakpoints}
    >
      {children}
    </ColumnResponsiveProps>
  );
};

const columnPropTypes = {
  children: node,
  debug: bool,
  fixed: bool,
  // static: bool,
  order: oneOfType([objectOf(number), number]),
  hidden: oneOfType([objectOf(bool), bool]),
  noGutter: oneOfType([objectOf(bool), bool]),
  verticalAlign: objectOf(oneOf(['center', 'bottom', 'top'])),
  span: oneOfType([objectOf(number), number]),
  push: oneOfType([objectOf(number), number]),
  pull: oneOfType([objectOf(number), number]),
};

Column.propTypes = {
  gridConfig: shape(propTypes.gridConfig),
  ...columnPropTypes,
};

Column.defaultProps = {
  // fixed: false,
  // hidden: false,
  // debug: false,
  gridConfig: undefined,
};

const GridColumn = getGridConfig(Column);
GridColumn.displayName = displayName;
GridColumn.propTypes = {
  ...columnPropTypes,
};
export default GridColumn;
