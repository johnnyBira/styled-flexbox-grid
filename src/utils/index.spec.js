import gridFactory, { gutterCalc, getColumnWidth } from './';

describe('Grid/utils', () => {
  describe('gutterCalc', () => {
    it('calculates the gutter from a base valuea and default multiplier', () => {
      expect(gutterCalc(24, 2)).toEqual(24);
    });
    it('calculates the gutter from a base valuea and a specified multiplier', () => {
      expect(gutterCalc(24, 2)).toEqual(24);
    });
  });
  describe('getColumnWidth', () => {
    it('returns a percentage based column width based on the given params', () => {
      expect(getColumnWidth(12, 1200, 6)).toEqual('50%');
    });
    it('returns a pixel based column width based on the given params', () => {
      expect(getColumnWidth(12, 1200, 6, true)).toEqual('600px');
    });
  });
  describe('gridFactory', () => {
    describe('default config', () => {
      const grid = gridFactory();

      it('returns an object of grid helper methods', () => {
        expect(grid).toMatchSnapshot();
      });

      it('prefills it\'s helper methods with default grid configs', () => {
        expect(grid.getColumnWidth(6)).toEqual('50%');
        expect(grid.getColumnWidth(6, true)).toEqual('600px');
        expect(grid.getGutterWidth(2)).toEqual('1rem');
      });
    });
    describe('custom config', () => {
      const grid = gridFactory({
        columnCount: 10,
        rowWidth: 1000,
        gutterBase: 24,
        gutterUnit: 'px',
      });

      it('returns an object of grid helper methods', () => {
        expect(grid).toMatchSnapshot();
      });

      it('prefills it\'s helper methods with custom grid configs', () => {
        expect(grid.getColumnWidth(5)).toEqual('50%');
        expect(grid.getColumnWidth(5, true)).toEqual('500px');
        expect(grid.getGutterWidth(2)).toEqual('24px');
      });
    });
  });
});
