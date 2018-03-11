import React from 'react';
import { ThemeProvider } from 'styled-components';
import { configure, setAddon, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';
import chaptersAddon from 'react-storybook-addon-chapters';
import { setOptions } from '@storybook/addon-options';
import 'github-markdown-css';
import '../docs/styles/styles.css';
import theme from '../docs/examples/theme';

// import 'github-markdown-css/github-markdown.css';
// import 'highlight.js/styles/github.css';
// import hljs from 'highlight.js/lib/highlight';
// import hljsJavascript from 'highlight.js/lib/languages/javascript';
// import marksy from 'marksy/components'

// hljs.registerLanguage('javascript', hljsJavascript);
// addDecorator((story, context) => withInfo('common info')(story)(context));
setAddon(chaptersAddon);
addDecorator(withKnobs);

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  requireAll(require.context('../docs/stories', true, /stories\.jsx?$/));
}

setOptions({
  /**
   * name to display in the top left corner
   * @type {String}
   */
  name: 'Styled Flexbox Grid',
  /**
   * URL for name in top left corner to link to
   * @type {String}
   */
  url: 'https://github.com/johnnyBira/styled-flexbox-grid',
});


addDecorator((story) => {
  const content = story();

  return (
    <div className="markdown-body" style={{ padding: '2%' }}>
      <ThemeProvider theme={theme}>
        {content}
      </ThemeProvider>
    </div>
  );
});

// addDecorator((story) => {
//   const content = story();
//
//   return (
//     <div class="markdown-body">
//       <div style={{ padding: '20px' }}>
//         {content}
//       </div>
//     </div>
//   );
// })

configure(loadStories, module);
