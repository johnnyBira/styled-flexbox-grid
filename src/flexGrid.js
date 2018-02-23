import { Component } from 'react';
import { node, shape } from 'prop-types';
import { gridConfig } from './propTypes';
import gridFactory from './utils';

class FlexGrid extends Component {
  getChildContext() {
    const {
      rowWidth,
      columnCount,
      gutterBase = 1,
      gutterUnit = 'rem',
      gutter = {},
      breakpoints,
    } = this.props;

    const config = {
      rowWidth,
      columnCount,
      gutterBase,
      gutterUnit,
      breakpoints,
    };

    return {
      gridConfig: {
        utils: gridFactory(config),
        rowWidth,
        gutter,
        breakpoints,
      },
    };
  }

  render() {
    return this.props.children;
  }
}

const propTypes = {
  ...gridConfig,
  children: node,
};

FlexGrid.childContextTypes = {
  gridConfig: shape(gridConfig),
};

FlexGrid.propTypes = propTypes;

export default FlexGrid;
