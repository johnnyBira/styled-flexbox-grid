<br>
---
<br>
```javascript
  import StyledFlexGrid from 'styled-flexbox-grid';
  import styledBreakpointUtils from 'styled-breakpoint-utils';

  // 1. Configure the grid
  const gridConfig = {
    rowWidth: 1920,
    columnCount: 12,
    gutter: { xxs: "1rem", xl: "1.5rem", xxl: "2rem" },

    // Add any number of breakpoints with a naming convention of your choice
    breakpoints: styledBreakpointUtils({
      xxs: 0,
      xs: 320,
      s: 576,
      m: 768,
      l: 992,
      xl: 1200,
      xxl: 1400,
    }),
  };

  // 2. Create a custom grid called `MyGrid`
  const MyGrid = ({ children, ...rest }) => {
    return (
      <StyledFlexGrid {...gridConfig} {...rest}>
        {children}
      </StyledFlexGrid>
    )
  };

  // 3. Export and start using `MyGrid`
  export default MyGrid;
```
