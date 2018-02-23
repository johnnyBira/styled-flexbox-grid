import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withDocs }  from 'storybook-readme';
import chaptersAddon from 'react-storybook-addon-chapters';
import { ThemeProvider } from 'styled-components';
import { number, text, select } from '@storybook/addon-knobs/react';
import styledBreakpoint from '@humblebee/styled-components-breakpoint';

// Docs
import '../styles/styles.css';
import MdHeader from '../markdown/storybook/branding/header.md';
import MdFooter from '../markdown/storybook/branding/footer.md';
import MdPreface from '../markdown/common/01_preface.md';
import MdSetup from '../markdown/common/02_setup.md';
import MyGrid from '../examples/MyGrid';
import ExampleContent from '../examples/ExampleContent';
import StyledFlexGrid, { Row, Column } from '../../src';

// Valid props
import {
  validJustifyProps,
  validDirectionProps,
  validAlignProps,
} from '../../src/row';

const createColumns = (num, span) => {
  const columns = [];
  for (let i = 0; i < num; i += 1) {
    const index = i + 1;
    columns.push(<Column span={span} key={index}><ExampleContent height={(index === 1 ? '12rem' : '6rem')}>{index}</ExampleContent></Column>);
  }
  return columns;
};

storiesOf('Styled Flexbox Grid', module)
  .add('Index', withDocs(
    [
      MdHeader,
      MdSetup,
      MdFooter,
    ],
    () => {
      // Column
      const columns = number('Column: Columns', 12, {
        range: true, min: 1, max: 24, step: 1,
      }, 'Column');

      const columnSpan = number('Column: Span', 1, {
        range: true, min: 1, max: 24, step: 1,
      }, 'Column');

      // Row
      const rowJustify = select('Row: Justify', validJustifyProps, 'initial');
      const rowDirection = select('Row: Direction', validDirectionProps, 'initial');
      const rowAlign = select('Row: Align', validAlignProps, 'center');

      // Grid
      const gridColumnCount = number('Grid: Column count', 12, {
        range: true, min: 1, max: 24, step: 1,
      }, 'Grid');
      const rowWidth = number('Grid: Row width', 1440, {
        range: true, min: 768, max: 1440, step: 1,
      }, 'Grid');

      return (
        <MyGrid columnCount={gridColumnCount} rowWidth={rowWidth} direction={rowDirection}>
          <Row direction={rowDirection} align={rowAlign} justify={rowJustify}>
            {createColumns(columns, columnSpan)}
          </Row>
        </MyGrid>
      );
    },
  ));


// storiesOf('Index', module)
//   .addWithChapters(
//     'Setup',
//     {
//       info: '**Styled Flexbox Grid** asumes your project is based on [React](https://reactjs.org/) and [Styled-Components](https://www.styled-components.com/).',
//       chapters: [
//         {
//           sections: [
//             {
//               title: 'Installation',
//               info: `
//                 Install the following pacakges:
//                 \`\`\`sh
//                   // Via npm:
//                   npm intall styled-flexbox-grid styled-breakpoint-utils;
//                   // Or yarn:
//                   yarn add styled-flexbox-grid styled-breakpoint-utils;
//                 \`\`\`
//               `,
//               sectionFn: () => {},
//               options: {
//                 showSource: false,
//                 allowSourceToggling: false,
//                 showPropTables: false,
//                 allowPropTablesToggling: false,
//               },
//             },
//             {
//               title: 'Configuration',
//               info: `
//                 Configure and setup the grid as such:
//                 \`\`\`javascript
//                   import StyledFlexGrid from 'styled-flexbox-grid';
//                   import styledBBreakpointUtils from 'styled-breakpoint-utils';
//
//                   const gridConfig = {
//                     rowWidth: 1920,
//                     columnCount: 12,
//                     gutter: { xxs: "1rem", xl: "1.5rem", xxl: "2rem" },
//                     // Configure the breakpoints
//                     breakpoints: styledBBreakpointUtils({
//                       xxs: 0,
//                       xs: 320,
//                       s: 576,
//                       m: 768,
//                       l: 992,
//                       xl: 1200,
//                       xxl: 1400,
//                     }),
//                   };
//
//                   const MyGrid = (props) => {
//                     return (
//                       <StyledFlexGrid {...gridConfig}>
//                         {props.children}
//                       </StyledFlexGrid>
//                     )
//                   };
//
//                   // Export
//                   export default MyGrid;
//                 \`\`\`
//
//               `,
//               sectionFn: () => {},
//               options: {
//                 showSource: false,
//                 allowSourceToggling: false,
//                 showPropTables: false,
//                 allowPropTablesToggling: false,
//               },
//             },
//             {
//               title: 'Usage',
//               info: `
//                 Above we create and export the component **<MyGrid />**. Let\'s make use of it.
//                 As you can see from the example the breakpoints you defined is avilable
//               `,
//               sectionFn: () => (
//                 <MyGrid>
//                   <Row>
//                     <Column span={{ xxs: 6, m: 4, l: 3 }}><ExampleContent /></Column>
//                     <Column span={{ xxs: 6, m: 4, l: 3 }}><ExampleContent /></Column>
//                     <Column span={{ xxs: 6, m: 4, l: 3 }}><ExampleContent /></Column>
//                     <Column span={{ xxs: 6, m: 4, l: 3 }}><ExampleContent /></Column>
//                     <Column span={{ xxs: 6, m: 4, l: 3 }}><ExampleContent /></Column>
//                     <Column span={{ xxs: 6, m: 4, l: 3 }}><ExampleContent /></Column>
//                     <Column span={{ xxs: 6, m: 4, l: 3 }}><ExampleContent /></Column>
//                     <Column span={{ xxs: 6, m: 4, l: 3 }}><ExampleContent /></Column>
//                   </Row>
//                 </MyGrid>
//               ),
//             },
//           ],
//         },
//       ],
//     },
//   );
//
// storiesOf('Components', module)
//   .addWithChapters(
//     'FlexboxGrid',
//     {
//       info: '**Styled Flexbox Grid** asumes your project is based on [React](https://reactjs.org/) and [Styled-Components](https://www.styled-components.com/).',
//       chapters: [
//         {
//           sections: [
//             {
//               title: '<FlexboxGrid />',
//               info: `
//                 **<FlexboxGrid />** is the default export of **styled-flexbox-grid**. It acts as the root element and provider of it's child elements **<Row />** and **<Column />**.
//
//                 Using <Row /> and <Column /> but omiting <FlexboxGrid /> will result in an error.
//               `,
//               sectionFn: () => (
//                 <StyledFlexGrid {...gridSettings} breakpoints={media}>
//                   <Row>
//                     <Column />
//                   </Row>
//                 </StyledFlexGrid>
//               ),
//               options: {
//                 showSource: true,
//                 allowSourceToggling: true,
//                 showPropTables: false,
//                 allowPropTablesToggling: true,
//               },
//             },
//           ],
//         },
//         {
//           title: 'Props',
//           info: 'FlexboxGrid can be configured with a number of props. These props will effect the scale and gutters of columns and rows.',
//           sections: [
//             {
//               title: 'rowWidth',
//               subtitle: 'Determains the **max-width** of the <Rows /> component.',
//               info: `
//                 | Deafault | Type      | responsive-props[(?)](https://www.npmjs.com/package/responsive-props) |
//                 | :------: | --------- | :----------------------------------------------------------------: |
//                 | 1400     | Number    | no                                                                 |
//               `,
//               sectionFn: () => {},
//             },
//             {
//               title: 'center',
//               subtitle: 'Determains the **max-width** of the <Rows /> component.',
//               info: `
//                 | Deafault | Type      | responsive-props[(?)](https://www.npmjs.com/package/responsive-props) |
//                 | :------: | --------- | :-------------------------------------------------------------------: |
//                 | true     | Boolean   | yes                                                                   |
//               `,
//               sectionFn: () => {},
//             },
//           ],
//         },
//       ],
//     },
//   );



// align	other	No	-
// center	bool	No	-
// children	node	No	-
// debug	bool	No	-
// direction	other	No	-
// fullWidth	bool	No	-
// gridConfig	other	No	-
// justify	other	No	-
// verticalAlign	other	No	-


// storiesOf('Grid', module)
//   .add('Default', withInfo('Something something dark side')(() => (
//     <ThemeProvider theme={{ responsiveProps: { breakpoint: media } }}>
//       <Grid {...gridSettings}>
//         <Row sideMargin={{ m: '100px' }} justify="center">
//           <Column span={{ xxs: 3 }} verticalAlign="{{ xs: 'center' }}" static>1</Column>
//           <Column span={{ xxs: 3 }} verticalAlign={{ xs: 'center' }} static>2</Column>
//         </Row>
//       </Grid>
//     </ThemeProvider>
//   )))
//   .add('Test', withInfo('Something something dark side')(() => (
//     <ThemeProvider theme={{ responsiveProps: { breakpoint: media } }}>
//       <Grid {...gridSettings}>
//         <Row sideMargin={{ m: '100px' }} justify="center">
//           <Column span={{ xxs: 3 }} verticalAlign="{{ xs: 'center' }}" static>1</Column>
//           <Column span={{ xxs: 3 }} verticalAlign={{ xs: 'center' }} static>2</Column>
//         </Row>
//       </Grid>
//     </ThemeProvider>
//   )));
