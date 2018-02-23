import React from 'react';
import { shape } from 'prop-types';
import * as propTypes from '../propTypes';

const getGridConfigHoc = (WrappedComponent) => {
  const getGridConfig = (props, context) => {
    const { gridConfig } = context;
    return <WrappedComponent {...props} gridConfig={gridConfig} />;
  };

  getGridConfig.contextTypes = {
    gridConfig: shape(propTypes.gridConfig),
  };

  return getGridConfig;
};

export default getGridConfigHoc;
