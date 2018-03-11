import React from 'react';
import { ThemeProvider } from 'styled-components';
import marked from 'marked';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import styledFlexboxGrid, { Row, Column } from '../../src';
// import ExampleContent from '../example/ExampleContent';
// import styles from  '../styles/styles.css';
// import MyGrid from '../examples/MyGrid';
// import setupIntroMd from '../markdown/common/01_setup_intro.md';
import setupConfigoMd from '../markdown/common/02_setup_config.md';
import ExampleContent from '../examples/ExampleContent';


storiesOf('Styled Flexbox Grid', module)
  .add('Getting started', withDocs(
    [
      setupConfigoMd,
    ],
    () => (
      <Row>
        <Row justify={{ m: 'center', l: 'between' }}>
          <Column span={{ s: 6, m: 3, l: 3, xl: 3  }}>
            <ExampleContent />
          </Column>
          <Column span={{ s: 6, m: 3, l: 3, xl: 3  }}>
            <ExampleContent />
          </Column>
          <Column span={{ s: 6, m: 3, l: 3, xl: 3  }}>
            <ExampleContent />
          </Column>
          <Column span={{ s: 6, m: 3, l: 3, xl: 3  }}>
            <ExampleContent />
          </Column>
        </Row>
        <Row justify={{ m: 'center', l: 'between' }}>
          <Column span={{ s: 6, m: 3, l: 3, xl: 4  }}>
            <ExampleContent />
          </Column>
          <Column span={{ s: 6, m: 3, l: 3, xl: 4  }}>
            <ExampleContent />
          </Column>
          <Column span={{ s: 6, m: 3, l: 3, xl: 4  }}>
            <ExampleContent />
          </Column>
        </Row>
      </Row>
    ),
  ));
