import React from 'react';
import { configure, setAddon } from '@storybook/react';
import chaptersAddon from 'react-storybook-addon-chapters';
import { storiesOf } from '@storybook/react';
import { number, text, select, boolean } from '@storybook/addon-knobs/react';
import { Row, Column } from '../../src';
import { validAlignSelfProps } from '../../src/column';
import ExampleContent from '../examples/ExampleContent';
import columnMd from '../markdown/common/03_column.md';
import { htmlToMd } from '../utils';


storiesOf('Styled Flexbox Grid', module)
  .addWithChapters(
    '<Column />',
    () => {
      const columnsRange = (min = 1, max = 12) => ({
        range: true, min, max, step: 1,
      });

      const span = number('span', 6, columnsRange());
      const offset = number('offset', 1, columnsRange(-11, 6));
      const align = select('align', validAlignSelfProps, 'center');
      const order = boolean('order', true);
      const hidden = boolean('hidden', false);
      const fixed = boolean('fixed', true);
      const gutterless = boolean('gutterless', true);

      return (
        {
          info: htmlToMd(columnMd),
          chapters: [
            // List of chapters.
            {
              sections: [
                // List of sections.
                {
                  title: 'span',
                  options: {
                    showSource: false,
                    allowSourceToggling: true,
                    showPropTables: false,
                    allowPropTablesToggling: true,
                  },
                  info: 'The **span** prop determines the width of the column. The value of span represent how many column widths it should span across. I.e. passing the value **6** for a **12** column grid, would result in a column with a width of 50%.',
                  sectionFn: () => (
                    <Row debug>
                      <Column span={span}>
                        <ExampleContent>
                          Span: {span}
                        </ExampleContent>
                      </Column>
                    </Row>
                  ),
                },
                {
                  title: 'Grow / Shrink',
                  info: `For scenarios when the the column width should be distributed based on the available space, there is ***grow*** and ***shrink***. These props are best used in combination with ***span***, where the value of ***span*** will be used as the flex-basis, or ideal width if you will.
                        In this example all columns have a ***span*** value of 2, but due to different grow and shrink values their width differs to fill the remaining space of the row.`,
                  sectionFn: () => (
                    <Row>
                      <Column shrink={1} span={2}>
                        <ExampleContent>
                          {'Span 2'}<br />{'Shrink 1'}
                        </ExampleContent>
                      </Column>
                      <Column grow={1} span={2}>
                        <ExampleContent>
                          {'Span 2'}<br />{'Grow 1'}
                        </ExampleContent>
                      </Column>
                      <Column span={2}>
                        <ExampleContent>
                          Span 2
                        </ExampleContent>
                      </Column>
                    </Row>
                  ),
                },
                {
                  title: 'offset',
                  options: {
                    showSource: false,
                    allowSourceToggling: true,
                    showPropTables: false,
                    allowPropTablesToggling: true,
                  },
                  info: `The ***offset*** prop is used to push or pull a column by a given number of column widths. The column will keep is't place in the flow of
                        the layout and effect the position of it's surrounding columns. Offset can be a either a positive or negative value.`,
                  sectionFn: () => (
                    <Row justify="center">
                      <Column span={2}>
                        <ExampleContent />
                      </Column>
                      <Column span={2} offset={offset}>
                        <ExampleContent>
                          Offset: {offset}
                        </ExampleContent>
                      </Column>
                      <Column span={2}>
                        <ExampleContent />
                      </Column>
                    </Row>
                  ),
                },
                {
                  title: 'align',
                  options: {
                    showSource: false,
                    allowSourceToggling: true,
                    showPropTables: false,
                    allowPropTablesToggling: true,
                  },
                  info: ``,
                  sectionFn: () => (
                    <Row justify="center">
                      <Column span={6} align={align}>
                        <ExampleContent>
                          {'Align: '}{align}
                        </ExampleContent>
                      </Column>
                      <Column span={6}>
                        <ExampleContent height="12rem" />
                      </Column>
                    </Row>
                  ),
                },
                {
                  title: 'order',
                  options: {
                    showSource: false,
                    allowSourceToggling: true,
                    showPropTables: false,
                    allowPropTablesToggling: true,
                  },
                  info: 'Being abble to position a column independently of it\'s source order is a powerful feature of CSS flexbox. Passing a positive or negative number to the ***order*** prop changes the columns initial **order** value of **0**.',
                  sectionFn: () => (
                    <Row justify="center">
                      <Column span={2} order={order ? 3 : 0}>
                        <ExampleContent>
                          {'First'}
                          <br />
                          {`Order: ${order ? 3 : 0}`}
                        </ExampleContent>
                      </Column>
                      <Column span={2} order={order ? 4 : 0}>
                        <ExampleContent>
                          {'Second'}
                          <br />
                          {`Order: ${order ? 4 : 0}`}
                        </ExampleContent>
                      </Column>
                      <Column span={2} order={order ? 2 : 0}>
                        <ExampleContent>
                          {'Third'}
                          <br />
                          {`Order: ${order ? 2 : 0}`}
                        </ExampleContent>
                      </Column>
                      <Column span={2} order={order ? 1 : 0}>
                        <ExampleContent>
                          {'Fourth'}
                          <br />
                          {`Order: ${order ? 1 : 0}`}
                        </ExampleContent>
                      </Column>
                    </Row>
                  ),
                },
                {
                  title: 'hidden',
                  options: {
                    showSource: false,
                    allowSourceToggling: true,
                    showPropTables: false,
                    allowPropTablesToggling: true,
                  },
                  sectionFn: () => (
                    <Row>
                      <Column hidden={hidden}>
                        <ExampleContent />
                      </Column>
                    </Row>
                  ),
                },
                {
                  title: 'fixed',
                  options: {
                    showSource: false,
                    allowSourceToggling: true,
                    showPropTables: false,
                    allowPropTablesToggling: true,
                  },
                  info: `Setting a columns **fixed** prop to ***true***, will cause it to retain it's width, even as the wrapping ***<Row />*** is scaling. This is done by setting it\'s width in pixels, rather than the default percentage.
                        The column will start scaling when the row width is smaller than the column width.`,
                  sectionFn: () => (
                    <Row justify="center">
                      <Column span={6} fixed={fixed}>
                        <ExampleContent />
                      </Column>
                    </Row>
                  ),
                },
                {
                  title: 'gutterless',
                  options: {
                    showSource: false,
                    allowSourceToggling: true,
                    showPropTables: false,
                    allowPropTablesToggling: true,
                  },
                  sectionFn: () => (
                    <Row justify="center">
                      <Column span={2} gutterless={gutterless}>
                        <ExampleContent />
                      </Column>
                      <Column span={2} gutterless={gutterless}>
                        <ExampleContent />
                      </Column>
                      <Column span={2} gutterless={gutterless}>
                        <ExampleContent />
                      </Column>
                      <Column span={2} gutterless={gutterless}>
                        <ExampleContent />
                      </Column>
                      <Column span={2} gutterless={gutterless}>
                        <ExampleContent />
                      </Column>
                      <Column span={2} gutterless={gutterless}>
                        <ExampleContent />
                      </Column>
                    </Row>
                  ),
                },
              ],
            },
          ],
        }
      );
    },
  );
