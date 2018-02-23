import React from 'react';
import { shallow, mount } from 'enzyme';
import styledBreakpoint from '@humblebee/styled-components-breakpoint';
import FlexGrid, { Column, Row } from './';

const gridSettings = {
  rowWidth: 1200,
  columnCount: 12,
  gutterBase: 24,
  gutterUnit: 'px',
  gutter: { xxs: 2 },
  breakpoints: styledBreakpoint({
    xxs: 0,
    xs: 320,
    s: 576,
    m: 768,
    l: 992,
    xl: 1200,
  }),
};

const Grid = ({ children }) => (
  <FlexGrid {...gridSettings}>
    {children}
  </FlexGrid>
);

describe('FlexGrid', () => {

  describe('Column', () => {
    const ColumnWrapper = ({ children }) => (
      <Grid>
        <Row>
          {children}
        </Row>
      </Grid>
    );

    describe('render', () => {
      it('renders as expected without any props', () => {
        const wrapper = mount(
          <ColumnWrapper>
            <Column />
          </ColumnWrapper>
        );
        expect(wrapper.find(Column)).toMatchSnapshot();
      });

      it('renders it\'s children', () => {
        const wrapper = shallow(
          <ColumnWrapper>
            <Column>
              <p>Test</p>
              <p>Test</p>
            </Column>
          </ColumnWrapper>
        );
        expect((wrapper.find(Column)).props().children.length).toEqual(2);
      });

      it('throws an error when trying to render without a parent Grid component', () => {
        const wrapper = () => {
          mount(<Column />);
        };
        // spyOn suppresses unwanted react error
        spyOn(console, 'error');
        expect(wrapper).toThrowErrorMatchingSnapshot();
      });
    });

    describe('responsive props', () => {
      it('creates styles for each column width', () => {
        const wrapper = mount(
          <ColumnWrapper>
            <Column columns={{ xxs: 12, xs: 10, s: 8, m: 6, l: 4, xl: 2 }} />
          </ColumnWrapper>
        );
        expect(wrapper.find(Column)).toMatchSnapshot();
      })

      it('creates styles for each offset', () => {
        const wrapper = mount(
          <ColumnWrapper>
            <Column offset={{ xxs: 12, xs: 10, s: 8, m: 6, l: 4, xl: 2 }} />
          </ColumnWrapper>
        );
        expect(wrapper.find(Column)).toMatchSnapshot();
      })

      it('creates styles for each vertical align', () => {
        const wrapper = mount(
          <ColumnWrapper>
            <Column
              verticalAlign={{
                xxs: 'center',
                xs: 'bottom',
                s: 'top',
                m: 'center',
                l: 'bottom',
                xl: 'top'
              }}
            />
          </ColumnWrapper>
        );
        expect(wrapper.find(Column)).toMatchSnapshot();
      })
    })
  });
});
