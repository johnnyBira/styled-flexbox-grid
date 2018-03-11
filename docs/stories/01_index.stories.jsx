import React from 'react';
import { ThemeProvider } from 'styled-components';
import { storiesOf, addDecorator } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import chaptersAddon from 'react-storybook-addon-chapters';
import { number, text, select, boolean } from '@storybook/addon-knobs/react';
// import styledBreakpoint from '@humblebee/styled-components-breakpoint';

// Docs
// import '../styles/styles.css';
import MdHeader from '../markdown/storybook/header.md';
import ExampleContent from '../examples/ExampleContent';
import theme from '../examples/theme';
import styledFlexboxGrid, { Row, Column } from '../../src';

// Valid props
import {
  validJustifyProps,
  validDirectionProps,
  validAlignProps,
} from '../../src/row';

const createColumns = (num, span, fixed) => {
  const columns = [];
  for (let i = 0; i < num; i += 1) {
    const index = i + 1;
    columns.push(<Column
      span={span}
      fixed={fixed}
      key={index}
    >
      <ExampleContent
        height={(index % 2 ? '12rem' : '6rem')}
      >
        {index}
      </ExampleContent>
    </Column>);
  }
  return columns;
};

storiesOf('Styled Flexbox Grid', module)
  .addDecorator(story => ([
    <style dangerouslySetInnerHTML={{
      __html: `
          body {
            background: #232625;
          }
        `,
      }}
    />,
    <div className="index">
      {story()}
    </div>,
  ]))
  .add('Index', withDocs(
    [
      MdHeader,
    ],
    () => {
      // Column
      const columns = number('Column: Columns', 12, {
        range: true, min: 1, max: 24, step: 1,
      }, 'Column');

      const columnSpan = number('Column: Span', 1, {
        range: true, min: 1, max: 24, step: 1,
      }, 'Column');
      const columnAuto = boolean('Column: Auto', false);
      const columnFixed = boolean('Column: Fixed', false);

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
        <ThemeProvider theme={{
            ...theme,
            styledFlexboxGrid: styledFlexboxGrid({
              ...theme.styledFlexboxGrid,
              columnCount: gridColumnCount,
              rowWidth,
            }),
          }}
        >
          <Row direction={rowDirection} align={rowAlign} justify={rowJustify} debug>
            {createColumns(columns, columnSpan, columnFixed, columnAuto)}
          </Row>
        </ThemeProvider>
      );
    },
  ));
