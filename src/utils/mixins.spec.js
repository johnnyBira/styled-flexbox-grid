import {
  getVerticalAlignment,
  getHorizontalAlignment,
  verticalAlignSelf,
  order,
  span,
  offset,
  gutter,
  justify,
  direction,
  alignColumns,
  verticalAlignColumns,
  sideMargin,
} from './mixins';

describe('Grid/mixins', () => {
  describe('getVerticalAlignment', () => {
    it('returns the corrent flex alignemnt attribute', () => {
      expect(getVerticalAlignment('center')).toEqual('center');
      expect(getVerticalAlignment('bottom')).toEqual('flex-end');
      expect(getVerticalAlignment('top')).toEqual('flex-start');
    });
    it('returns `normal` as the default flex alignemnt attribute', () => {
      expect(getVerticalAlignment('test')).toEqual('normal');
    });
  });

  describe('getHorizontalAlignment', () => {
    it('returns the corrent flex alignemnt attribute', () => {
      expect(getHorizontalAlignment('center')).toEqual('center');
      expect(getHorizontalAlignment('right')).toEqual('flex-end');
      expect(getHorizontalAlignment('left')).toEqual('flex-start');
    });
    it('returns `normal` as the default flex alignemnt attribute', () => {
      expect(getHorizontalAlignment('test')).toEqual('normal');
      expect(getHorizontalAlignment()).toEqual('normal');
    });
  });

  describe('verticalAlignSelf', () => {
    it('returns the css attribute `align-self` with the provided value', () => {
      expect(verticalAlignSelf('center')).toMatchSnapshot();
    });
  });

  describe('order', () => {
    it('returns the css attribute `order` with the provided value', () => {
      expect(order(1)).toMatchSnapshot();
    });
  });

  describe('columns', () => {
    it('returns the css attribute `max-width` with the provided value', () => {
      expect(span('50%')).toMatchSnapshot();
    });
  });

  describe('offset', () => {
    it('returns the css attribute `margin-left` with the provided value', () => {
      expect(offset('50%')).toMatchSnapshot();
    });
  });

  describe('gutter', () => {
    it('returns the css attributes `padding-left` and `padding-right` with the provided value', () => {
      expect(gutter('1rem')).toMatchSnapshot();
    });
  });

  describe('justify', () => {
    it('returns the css attribute `justify-content` with the provided value', () => {
      expect(justify('end')).toMatchSnapshot();
      expect(justify('start')).toMatchSnapshot();
      expect(justify('center')).toMatchSnapshot();
      expect(justify('around')).toMatchSnapshot();
      expect(justify('between')).toMatchSnapshot();
      expect(justify('evenly')).toMatchSnapshot();
    });
    it('returns `normal` as the default `justify-content` attribute', () => {
      expect(justify('test')).toMatchSnapshot();
      expect(justify()).toMatchSnapshot();
    });
  });

  describe('direction', () => {
    it('returns the css attribute `flex-direction` with the provided value', () => {
      expect(direction('column')).toMatchSnapshot();
      expect(direction('columnReverse')).toMatchSnapshot();
      expect(direction('row')).toMatchSnapshot();
      expect(direction('rowReverse')).toMatchSnapshot();
      expect(direction('reverse')).toMatchSnapshot();
      expect(direction('unset')).toMatchSnapshot();
      expect(direction('initial')).toMatchSnapshot();
    });
    it('returns `normal` as the default `flex-direction` attribute', () => {
      expect(direction('test')).toMatchSnapshot();
      expect(direction()).toMatchSnapshot();
    });
  });

  describe('alignColumns', () => {
    it('returns the css attribute `justify-content` with the provided value', () => {
      expect(alignColumns('center')).toMatchSnapshot();
    });
  });

  describe('verticalAlignColumns', () => {
    it('returns the css attribute `align-items` with the provided value', () => {
      expect(verticalAlignColumns('center')).toMatchSnapshot();
    });
  })
});
