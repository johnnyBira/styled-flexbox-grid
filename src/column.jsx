import React from 'react';
import styled, { withTheme } from 'styled-components';
import { node, bool, number, shape, oneOf, oneOfType, objectOf } from 'prop-types';
import withResponsiveProps from 'responsive-props'; // eslint-disable-line
import * as propTypes from './propTypes';
// import getstyledFlexboxGrid from './HOC/getstyledFlexboxGrid';

import {
  order,
  verticalAlignSelf,
  span,
  hidden,
  offset,
  grow,
  shrink,
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
    theme,
    // Responsice props
    fixed,
    // auto,
  } = props;

  const { styledFlexboxGrid } = theme;

  const { getColumnWidth, getGutterWidth } = styledFlexboxGrid;

  // Register methods to be used for responsive props
  const ColumnResponsiveProps = withResponsiveProps(StyledColumn, {
    order,
    hidden,
    position,
    noGutter,
    grow,
    shrink,
    gutter: args => gutterMixin(getGutterWidth(args)),
    span: args => span(getColumnWidth(args, fixed), fixed),
    offset: args => offset(getColumnWidth(args)),
    background: bg => () => `background: ${bg};`,
  });

  return (
    <ColumnResponsiveProps
      order={props.order}
      grow={props.grow}
      shrink={props.shrink}
      verticalAlign={props.verticalAlign}
      span={props.span}
      offset={props.offset}
      noGutter={props.noGutter}
      responsiveProps={props.responsiveProps}
      hidden={props.hidden}
      position={props.position}
      debug={props.debug}
      gutter={styledFlexboxGrid.gutter}
      breakpoints={styledFlexboxGrid.breakpoints}
    >
      {children}
    </ColumnResponsiveProps>
  );
};

const columnPropTypes = {
  children: node,
  debug: bool,
  fixed: bool,
  grow: oneOfType([objectOf(number), number]),
  shrink: oneOfType([objectOf(number), number]),
  order: oneOfType([objectOf(number), number]),
  hidden: oneOfType([objectOf(bool), bool]),
  noGutter: oneOfType([objectOf(bool), bool]),
  verticalAlign: objectOf(oneOf(['center', 'bottom', 'top'])),
  span: oneOfType([objectOf(number), number]),
  offset: oneOfType([objectOf(number), number]),
};

Column.propTypes = {
  styledFlexboxGrid: shape(propTypes.styledFlexboxGrid),
  theme: shape({}),
  ...columnPropTypes,
};

Column.defaultProps = {
  // fixed: false,
  // hidden: false,
  // debug: false,
  // auto: false,
  styledFlexboxGrid: undefined,
};

const GridColumn = withTheme(Column);
GridColumn.displayName = displayName;
GridColumn.propTypes = {
  ...columnPropTypes,
};
export default GridColumn;
