import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { select, text } from '@storybook/addon-knobs';
import Icon, { iconSizes } from './';
import iconTypes from './IconTypes';

storiesOf('Icon', module)
  .add('Default', withInfo()(() => {
    const iconLabel = 'Icon type';
    const iconOptions = Object.keys(iconTypes);
    const iconDefault = 'bell';
    const icon = select(iconLabel, iconOptions, iconDefault);

    const sizeLabel = 'Icon size';
    const sizeOptions = Object.keys(iconSizes);
    const sizeDefault = 'medium';
    const size = select(sizeLabel, sizeOptions, sizeDefault);

    const colorLabel = 'Color';
    const colorDefault = '#000000';
    const color = text(colorLabel, colorDefault);

    return (
      <Icon
        size={size}
        type={icon}
        color={color}
      />
    );
  }));
