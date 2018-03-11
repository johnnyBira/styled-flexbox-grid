# Getting started 🍱

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
