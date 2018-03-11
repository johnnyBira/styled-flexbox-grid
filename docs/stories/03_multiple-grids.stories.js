import React from 'react';
import { ThemeProvider } from 'styled-components';
import marked from 'marked';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import styledFlexboxGrid, { Row, Column } from '../../src';
import multipleGridsMd from '../markdown/common/03_multiple_grids.md';
import ExampleContent from '../examples/ExampleContent';


storiesOf('Styled Flexbox Grid', module)
  .add('Multiple grids', withDocs(
    [
      multipleGridsMd,
    ],
    () => {
      const anotherGrid = styledFlexboxGrid({
        rowWidth: 700,
        gutter: '1rem',
        columnCount: 10,
        breakpoints: { xxs: 0, xs: 320, s: 576, m: 768, l: 992, xl: 1200, xxl: 1440, },
      });

      return (
        <div>
          <Row>
            <Column span={6}>
              <ExampleContent />
            </Column>
            <Column span={6}>
              <ExampleContent />
            </Column>
          </Row>
          <ThemeProvider theme={{ styledFlexboxGrid: anotherGrid }}>
            <Row>
              <Column span={5}>
                <ExampleContent />
              </Column>
              <Column span={5}>
                <ExampleContent />
              </Column>
            </Row>
          </ThemeProvider>
        </div>
      );
    },
  ));
