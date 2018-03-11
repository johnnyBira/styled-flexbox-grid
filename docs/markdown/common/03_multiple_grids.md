# Multiple Grids

Adding an additional grid with different configurations is as easy as overriding `styledFlexboxGrid` in the `theme` of `ThemeProvider`.

Bellow we override `mainGrid` from the [Setup](#setup) section with a grid called `anotherGrid`.
This makes it possible to use different grids in different parts of the app.

```javascript
const anotherGrid = styledFlexboxGrid({
  rowWidth: 700,
  gutter: '1rem',
  columnCount: 10,
  breakpoints: { xxs: 0, xs: 320, s: 576, m: 768, l: 992, xl: 1200, xxl: 1440, },
});

// Register the theme from the setup section
const Example = () => (
  <ThemeProvider theme={theme}>
    <Row>
      <Column span={6} >
      <Column span={6} >
    </Row>
    <ThemeProvider theme={{ styledFlexboxGrid: anotherGrid }}>
      <Row>
        <Column span={5} >
        <Column span={5} >
      </Row>
    </ThemeProvider>
  </ThemeProvider>
);

document.getElementById('app'))
```
---
