import React from 'react';
import { ThemeProvider } from 'styled-components';
import styledFlexboxGrid, { Row, Column } from '../../src';
import { storiesOf } from '@storybook/react';
// import styles from  '../styles/styles.css';
// import MyGrid from '../examples/MyGrid';
import ExampleContent from '../examples/ExampleContent';

const theme = {
  styledFlexboxGrid: styledFlexboxGrid({
    rowWidth: 1920,
    columnCount: 12,
    gutter: '1rem',
    // Configure the breakpoints
    breakpoints: {
      xxs: 0,
      xs: 320,
      s: 576,
      m: 768,
      l: 992,
      xl: 1200,
      xxl: 1400,
    },
  }),
};

storiesOf('Styled Flexbox Grid', module)
  .addWithChapters(
    'Setup',
    {
      info: '**Styled Flexbox Grid** asumes your project is based on [React](https://reactjs.org/) and [Styled-Components](https://www.styled-components.com/).',
      chapters: [
        {
          sections: [
            {
              title: 'Installation',
              info: `
                Install the following pacakges:
                \`\`\`sh
                  // Via npm:
                  npm intall styled-flexbox-grid styled-breakpoint-utils;
                  // Or yarn:
                  yarn add styled-flexbox-grid styled-breakpoint-utils;
                \`\`\`
              `,
              sectionFn: () => {},
              options: {
                showSource: false,
                allowSourceToggling: false,
                showPropTables: false,
                allowPropTablesToggling: false,
              },
            },
            {
              title: 'Configuration',
              info: `
                Configure and setup the grid as such:
                \`\`\`javascript
                  import StyledFlexGrid from 'styled-flexbox-grid';
                  import styledBBreakpointUtils from 'styled-breakpoint-utils';

                  const gridConfig = {
                    rowWidth: 1920,
                    columnCount: 12,
                    gutter: { xxs: "1rem", xl: "1.5rem", xxl: "2rem" },
                    // Configure the breakpoints
                    breakpoints: styledBBreakpointUtils({
                      xxs: 0,
                      xs: 320,
                      s: 576,
                      m: 768,
                      l: 992,
                      xl: 1200,
                      xxl: 1400,
                    }),
                  };

                  const MyGrid = (props) => {
                    return (
                      <StyledFlexGrid {...gridConfig}>
                        {props.children}
                      </StyledFlexGrid>
                    )
                  };

                  // Export
                  export default MyGrid;
                \`\`\`

              `,
              sectionFn: () => {},
              options: {
                showSource: false,
                allowSourceToggling: false,
                showPropTables: false,
                allowPropTablesToggling: false,
              },
            },
            {
              title: 'Usage',
              info: `
                Above we create and export the component **<MyGrid />**. Let\'s make use of it.
                As you can see from the example the breakpoints you defined is avilable
              `,
              sectionFn: () => (
                <ThemeProvider theme={theme}>
                  <Row>
                    <Column span={{ xxs: 6, m: 4, l: 3 }}><ExampleContent /></Column>
                    <Column span={{ xxs: 6, m: 4, l: 3 }}><ExampleContent /></Column>
                    <Column span={{ xxs: 6, m: 4, l: 3 }}><ExampleContent /></Column>
                    <Column span={{ xxs: 6, m: 4, l: 3 }}><ExampleContent /></Column>
                    <Column span={{ xxs: 6, m: 4, l: 3 }}><ExampleContent /></Column>
                    <Column span={{ xxs: 6, m: 4, l: 3 }}><ExampleContent /></Column>
                    <Column span={{ xxs: 6, m: 4, l: 3 }}><ExampleContent /></Column>
                    <Column span={{ xxs: 6, m: 4, l: 3 }}><ExampleContent /></Column>
                  </Row>
                </ThemeProvider>
              ),
            },
          ],
        },
      ],
    },
  );
