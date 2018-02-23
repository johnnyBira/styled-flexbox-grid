import React from 'react';
import styledBreakpoint from '@humblebee/styled-components-breakpoint';
import StyledFlexGrid from '../../src/flexGrid';

const gridConfig = {
  rowWidth: 1920,
  columnCount: 12,
  gutter: { xxs: 1, xl: 1.5, xxl: 2 },
  // Configure the breakpoints
  breakpoints: styledBreakpoint({
    xxs: 0,
    xs: 320,
    s: 576,
    m: 768,
    l: 992,
    xl: 1200,
    xxl: 1400,
  }),
};

const MyGrid = ({ children, ...rests }) => ( // eslint-disable-line
  // Pass gridConfig as props to the StyledFlexGrid component
  <StyledFlexGrid {...gridConfig} {...rests}>
    {children}
  </StyledFlexGrid>
);

// Export
export default MyGrid;
