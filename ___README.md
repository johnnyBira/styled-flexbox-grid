[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![codecov](https://codecov.io/gh/wearehumblebee/styled-components-breakpoint/branch/master/graph/badge.svg)](https://codecov.io/gh/wearehumblebee/styled-components-breakpoint)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Travis](https://img.shields.io/travis/rust-lang/rust.svg)]()

## Styled Flex Grid 💅

A flex based grid system using `styled-components`.

---

### Setup a custom grid
```javascript
import React from 'react';
import FlexGrid from '@humblebee/styled-components-flex-grid';
import breakpoint from '@humblebee/styled-components-breakpoint';

// Grid configuration
const gridSettings = {
  rowWidth: 1200,
  columnCount: 12,
  gutterBase: BASELINE,
  gutterUnit: 'px',
  gutter: { xxs: 2 },
  breakpoints: breakpoint(
    {
      xxs: 0,
      xs: 375,
      s: 768,
      m: 1024,
      l: 1360,
      xl: 1920,
    },
  ),
};

// Create a grid from the default
const MainGrid = ({ children }) => (
  <FlexGrid {...gridSettings}>
    {children}
  </FlexGrid>
);

export default MainGrid;

```

### Usage
```javascript
import React from 'react';
// Import the grid created above
import MainGrid from 'MainGrid';

const Layout = () => {
  <MainGrid>
    <Row>
      <Column columns={{ xl: 3, m: 4, s: 6 }}>
        Insert column children here
      </Column>
    <Row>
  </MainGrid>
}

```

---

### <Grid />
The `Grid` component is at the highest level of the component tree. This is where the configuration of the entire grid happens.

|Property       |Responsive Prop   |Default                                         |Description                                                              |
|---------------|------------------|------------------------------------------------|-------------------------------------------------------------------------|
|unit           |no                |'px'                                            |The unit used for rowWidth and gutterBase                                |
|rowWidth       |no                |1200                                            |Row min width                                                            |
|columnCount    |no                |12                                              |Number of columns per row                                                |
|breakpoints    |no                |Listed bellow                                   |Instance of `styled-responsive-breakpoint`                               |
|gutterBase     |no                |24                                              |Base value used to calculate column gutters                              |
|gutter         |yes               |{xxs: 1}                                        |Gutter width multiplied by gutterBase                                    |

#### unit
By default `styled-flex-grid` uses `'px'` for all it's units. This can however be changed to cater for other preferences. For example `unit` can be assign to `'rem'` or `'em'`, which will make it possible to then assign `rowWidth` and `gutterBase` with a unit other than `'px'`.

#### rowWidth
This value will be used to specify the `min-width` of the `Row` components contained within `Grid`.

#### columnCount
The number of columns that fit within a row. The default `columnCount` is 12, but can be overridden to match as many or as few column required by the layout.

#### breakpoints
The breakpoint property expect an instance of [`@humblebee/styled-components-breakpoint`](https://www.npmjs.com/package/@humblebee/styled-components-breakpoint). The default values are listed bellow and can be overridden with different values and naming convention of the keys (`xxs`, `xs`, `s` etc).

The important thing to remember is to provide a bottom value for `0` (`xxs` by default). Different grid systems handles the smallest possible breakpoint differently, `styled-flex-grid` happens to use a 0-based approach.

The default breakpoints are:
```javascript
{
  xxs: 0,
  xs: 320,
  s: 576,
  m: 768,
  l: 992,
  xl: 1200,
}
```

#### gutterBase
Gutter base is used to calculate the gutter of each column. The default `gutterBase` is 24px, which will be the total gutter between each column.

#### gutter
`gutter` can be used to set different gutter widths for different breakpoints. It uses the `gutterBase` as a multiplier, meaning 1 `gutter` equals 24px (using the default settings).
If you want half of the gutter width (i.e 12px) of smaller viewports, you can set it to 0.5.

```javascript
<Grid gutter={{ xxs: 0.5, s: 1 }} />
```

---

### <Row />

The `Row` is responsible for holding `Column` components. Except props that effect it's own layout, there are also a couple for controlling the alignment and spacing of it's inner `Column` components.

|Property       |Responsive Prop   |Default                                         |Description                                                              |
|---------------|------------------|------------------------------------------------|-------------------------------------------------------------------------|
|align          |yes               |'left'                                          |Horizontal alignment of columns                                          |
|justify        |yes               |Object of predefined breakpoints, listed bellow |Determines how whitespace is distributed between columns                 |
|verticalAlign  |yes               |24                                              |Vertical alignment of columns                                            |
|fullWidth      |yes               |{xxs: false}                                    |Makes the row span across the available horizontal space                 |
|direction      |yes               |{xxs: 'initial'}                                |The direction in which columns should flow                               |
|center         |no                |true                                            |Aligns the row to the center                                             |
|left           |no                |false                                           |Aligns the row to the left                                               |
|right          |no                |false                                           |Aligns the row to the right                                              |

#### align
Determines the alignment of columns. The default value is `'left'`, other possible values are `'right'` and `'center'`.

#### justify
Determines how whitespace is distributed between columns. Possible values are `'around'`, `'between'`, `'evenly'`, `'end'`, `'start'` and `'center'`.

#### verticalAlign
Aligns the columns vertically. Possible values are `'top'`, `'center'` and `'bottom'`.

#### fullWidth
Overrides the value of `rowWidth` configured in the `Grid` component, and makes the row span across the available horizontal space.

#### direction
Determines in which direction the columns should flow. Possible values are, `'column'`, `'columnReverse'`, `'row'`, `'rowReverse'`, `'reverse'` (same as `'rowReverse'`), `'unset'` and `'initial'`.

#### center, left, right
`center`, `left` and `right` are used to align the actual row itself, inside it's parent container.

---

### <Column />

`Column` is what

|Property       |Responsive Prop   |Default                                         |Description                                                              |
|---------------|------------------|------------------------------------------------|-------------------------------------------------------------------------|
|columns        |yes               |none                                            |Flex order value                                                         |
|verticalAlign  |yes               |Object of predefined breakpoints, listed bellow |Instance of `styled-responsive-breakpoint`                               |
|order          |yes               |24                                              |Base value used to calculate column gutters                              |
|offset         |yes               |{xxs: 1}                                        |Gutter width per breakpoint. 1 unit = 1 gutterBase. I.e 1 = 24 by default|
|fixed          |yes               |{xxs: 0}                                        |

---

Happy coding!

/ The bees at [Humblebee](http://humblebee.se) 🐝
