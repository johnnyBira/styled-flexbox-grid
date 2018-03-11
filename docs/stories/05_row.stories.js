import React from 'react';
import { configure, setAddon } from '@storybook/react';
import chaptersAddon from 'react-storybook-addon-chapters';
import { storiesOf } from '@storybook/react';
import { number, text, select, boolean } from '@storybook/addon-knobs/react';
import rowMd from '../markdown/common/04_row.md';
import { Row, Column } from '../../src';
import { validAlignProps, validJustifyProps, validDirectionProps } from '../../src//row';
import ExampleContent from '../examples/ExampleContent';
import { htmlToMd } from '../utils';

storiesOf('Styled Flexbox Grid', module)
  .addWithChapters(
    '<Row />',
    () => {
      const columnsRange = (min = 1, max = 12) => ({
        range: true, min, max, step: 1,
      });

      const align = select('align', validAlignProps, 'center');
      const justify = select('justify', validJustifyProps, 'between');
      const direction = select('direction', validDirectionProps, 'reverse');
      const fullWidth = boolean('fullWidth', true);
      const center = boolean('center', true);

      return (
        {
          info: htmlToMd(rowMd),
          chapters: [
            // List of chapters.
            {
              sections: [
                // List of sections.
                {
                  title: 'align',
                  options: {
                    showSource: false,
                    allowSourceToggling: true,
                    showPropTables: false,
                    allowPropTablesToggling: true,
                  },
                  sectionFn: () => (
                    <Row align={align}>
                      <Column span={3}>
                        <ExampleContent height="12rem" />
                      </Column>
                      <Column span={3}>
                        <ExampleContent />
                      </Column>
                      <Column span={3}>
                        <ExampleContent height="12rem" />
                      </Column>
                      <Column span={3}>
                        <ExampleContent />
                      </Column>
                    </Row>
                  ),
                },
                {
                  title: 'justify',
                  options: {
                    showSource: false,
                    allowSourceToggling: true,
                    showPropTables: false,
                    allowPropTablesToggling: true,
                  },
                  sectionFn: () => (
                    <Row justify={justify}>
                      <Column span={2}>
                        <ExampleContent />
                      </Column>
                      <Column span={2}>
                        <ExampleContent />
                      </Column>
                      <Column span={2}>
                        <ExampleContent />
                      </Column>
                      <Column span={2}>
                        <ExampleContent />
                      </Column>
                      <Column span={2}>
                        <ExampleContent />
                      </Column>
                    </Row>
                  ),
                },
                {
                  title: 'direction',
                  options: {
                    showSource: false,
                    allowSourceToggling: true,
                    showPropTables: false,
                    allowPropTablesToggling: true,
                  },
                  sectionFn: () => (
                    <Row direction={direction}>
                      <Column span={2}>
                        <ExampleContent>
                          1
                        </ExampleContent>
                      </Column>
                      <Column span={2}>
                        <ExampleContent>
                          2
                        </ExampleContent>
                      </Column>
                      <Column span={2}>
                        <ExampleContent>
                          3
                        </ExampleContent>
                      </Column>
                      <Column span={2}>
                        <ExampleContent>
                          4
                        </ExampleContent>
                      </Column>
                      <Column span={2}>
                        <ExampleContent>
                          5
                        </ExampleContent>
                      </Column>
                      <Column span={2}>
                        <ExampleContent>
                          6
                        </ExampleContent>
                      </Column>
                    </Row>
                  ),
                },
                {
                  title: 'fullWidth',
                  options: {
                    showSource: false,
                    allowSourceToggling: true,
                    showPropTables: false,
                    allowPropTablesToggling: true,
                  },
                  sectionFn: () => (
                    <Row fullWidth={fullWidth}>
                      <Column>
                        <ExampleContent />
                      </Column>
                    </Row>
                  ),
                },
                {
                  title: 'center',
                  options: {
                    showSource: false,
                    allowSourceToggling: true,
                    showPropTables: false,
                    allowPropTablesToggling: true,
                  },
                  sectionFn: () => (
                    <Row center={center}>
                      <Column>
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
