<h1 align="center">Styled FlexBox Grid</h1>
<h5 align="center">A Flex based grid for <a href="https://www.styled-components.com/">Styled-Components</a><br>
Using the <a href="https://github.com/johnnyBira/responsive-props">Responsive Props API</a></h5>
<p align="center" style="background: #232625; margin: 0; padding: 1.5rem 0 1rem 0;">
<a href="https://github.com/semantic-release/semantic-release"><img src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square" alt="semantic-release" /></a>
<a href=""><img src="https://img.shields.io/travis/rust-lang/rust.svg?style=flat-square" alt="Travis" /></a>
</p>
<p align="center" style="background: #232625; padding-bottom: 1rem;">
   <img src="https://raw.githubusercontent.com/johnnyBira/styled-flexbox-grid/develop/docs/images/logo.png" width="200">
</p>

<p align="center">
  <a href="https://johnnybira.github.io/styled-flexbox-grid">Read the docs</a>
</p>

---

## Getting started 🍱

***Styled Flexbox Grid*** is a grid system that offers a flexible API that can be configured for any number of breakpoints. This library assumes your project is using [React](https://reactjs.org/) and [Styled-Components](https://www.styled-components.com/).

The grid system consist of two component, ***Row*** and ***Column***. The API is flexible and can be configured for any number of breakpoints.

The layout of the components ***Row*** and ***Column***, are controlled by passing various props.
**All** props of ***Row*** and ***Column*** are able to target specific media queries to create a wide range of responsive layouts.

#### Target specific media queries
```javascript
  <Column span={{ xs: 4, s: 6, m: 6, l: 6 }} />
```

#### Without media queries (all viewports)
```javascript
  <Column span={6} />
```
___

Under the hood ***Styled Flexbox Grid*** uses the [responsive-props](https://www.npmjs.com/package/responsive-props) library.
Checkout the [README](https://github.com/johnnyBira/responsive-props) to learn more about the [API](https://github.com/johnnyBira/responsive-props#api).

---

## Setup

The config of `Styled Flexbox Grid` should be placed inside a `theme` of a `styled-components` [ThemeProvider](https://www.styled-components.com/docs/advanced#theming).

### Config options
|property         |type                 |Description                               |Default       |[responsive-props](https://www.npmjs.com/package/responsive-props)|
|-----------------|---------------------|------------------------------------------|--------------|------------------------------------------------------------------|
|rowWidth         |`Number`             | The max-width of the `Row` component     | `1200`       | Yes                                                              |
|gutter           |`Number` or `String` | The space between each column.           | `1rem`       | Yes                                                              |
|columnCount      |`Number`             | Number of columns per row                | `12`         | No                                                               |
|breakpoints      |`Object`             | Which breakpoints to target              | `{ xxs: 0 }` | Yes                                                              |

#### Important:
When defining your breakpoints it is necessary to have a breakpoint with a bottom value of `0` (i.e. `{ xxs: 0 }`). This makes it possible to target a range between the smallest possible viewport and a larger one.

Create a theme to be used with `ThemeProvider`.

`theme.js`
```javascript
import styledFlexboxGrid from 'styled-flexbox-grid';
import React from 'react';

// Create a grid instance called `mainGrid`
const mainGrid = styledFlexboxGrid({
  // Accepts responsive-props, i.e.: { xs: 280, m: 700, l: 800 }
  rowWidth: 1440,
  // Accepts responsive-props, i.e.: { xs: '0.25rem', m: '1rem', l: '1.5rem' }
  gutter: '12px',
  // Number of columns per row
  columnCount: 12,

  // Corresponding key names of this object are used to target `breakpoints` of the <Row /> and <Column /> props
  breakpoints: {
    xxs: 0,
    xs: 320,
    s: 576,
    m: 768,
    l: 992,
    xl: 1200,
    xxl: 1440,
  },
});

// Create a theme to be used with `styled-components` `ThemeProvider`
const theme = {
  // Insert `myGrid` under the namespace `styledFlexboxGrid`
  styledFlexboxGrid: myGrid,
};
```
---
Wrap the React app with `ThemeProvider` at a high level of the component tree. This makes the grid available anywhere in the app.

`main.js`
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
// Import theme.js from above
import theme from './theme';
import App from './components/App';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
document.getElementById('app'))
```

## Usage

Provided you followed the steps above you should now be able to import and use the `Row` and `Column`.

`main.js`
```javascript
import React from 'react';
import { Row, Column } from 'styled-flexbox-grid';
import ExampleContent from './ExampleContent';

const ExampleGrid = () => (
  <Row justify={{ m: 'center', l: 'between' }}>
    <Column span={{ s: 6, m: 3, l: 3, xl: 2  }}>
      <ExampleContent />
    </Column>
    <Column span={{ s: 6, m: 3, l: 3, xl: 2  }}>
      <ExampleContent />
    </Column>
    <Column span={{ s: 6, m: 3, l: 3, xl: 2  }}>
      <ExampleContent />
    </Column>
    <Column span={{ s: 6, m: 3, l: 3, xl: 2  }}>
      <ExampleContent />
    </Column>
  </Row>
);
```
<!-- STORY -->
---

## Multiple Grids

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
      <Column span={6} />
      <Column span={6} />
    </Row>
    <ThemeProvider theme={{ styledFlexboxGrid: anotherGrid }}>
      <Row>
        <Column span={5} />
        <Column span={5} />
      </Row>
    </ThemeProvider>
  </ThemeProvider>
);

document.getElementById('app'))
```
---
<!-- STORY -->


# Column

Columns make up the majority of the layout in a grid. The ***Column*** componets are wrapped by the ***Row*** component and comes with a lot of props to controll the layout.

All props of ***Column*** are [responsive-props](https://www.npmjs.com/package/responsive-props), and accept a values in any of the formats described in the [responsive-props API](https://www.npmjs.com/package/responsive-props#api).

Available props are described in detail bellow.

> The examples bellow asumes you have followed the steps in ***Setup***, and wrapped your componetns in the ***styled-components*** ***ThemeProvider***.

```javascript
/// Column import path
import { Column } from 'styledFlexboxGrid';
```

### Props
| property         | type                 | Description                                        | Default      |[responsive-props](https://www.npmjs.com/package/responsive-props)|
|------------------|----------------------|----------------------------------------------------|--------------|------------------------------------------------------------------|
| span             | Number               | Number of columns to span across                   | 1            | Yes                                                              |
| grow             | Number               | Flex grow property                                 | 0            | Yes                                                              |
| shrink           | Number               | Flex shrink property                               | 0            | Yes                                                              |
| offset           | Number               | Offsets the column                                 | 0            | Yes                                                              |
| align            | Number               | Set the alignment relative to other columns        | 0            | Yes                                                              |
| order            | Number               | Changed the order of the column                    | 0            | Yes                                                              |
| hidden           | Boolean              | Hides the column                                   | false        | Yes                                                              |
| fixed            | Boolean              | The column retains it's calculated size in pixels  | false        | Yes                                                              |
| gutterless       | Boolean              | Removes the gutter                                 | false        | Yes                                                              |

---

# Row

**Row** wraps the **Column** components and is responsible for how columns are ordered, aligned and distributed across the available space.

All props of **Row** are [responsive-props](https://www.npmjs.com/package/responsive-props), and accept a values in any of the formats described in the [responsive-props API](https://www.npmjs.com/package/responsive-props#api).

Available props are described in detail bellow.

> The examples bellow assumes you have followed the steps in **Getting started**.

 ---
 ```javascript
 /// Row import path
 import { Row } from 'styledFlexboxGrid';
 ```

 ### Props
 | property         | type                 | Description                                                 | Default      |[responsive-props](https://www.npmjs.com/package/responsive-props)|
 |------------------|----------------------|-------------------------------------------------------------|--------------|------------------------------------------------------------------|
 | align            | String               | Sets the alignment of columns                               | -            | Yes                                                              |
 | justify          | String               | Determines how columns should be distributes across the row | -            | Yes                                                              |
 | direction        | String               | Determines how columns should be ordered                    | -            | Yes                                                              |
 | fullWidth        | Boolean              | Allows for row to take up the full width of it's parent     | false        | Yes                                                              |
 | center           | Number               | Centers the row                                             | true         | Yes                                                               |

 ---
