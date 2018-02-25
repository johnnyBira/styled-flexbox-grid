import React from 'react';
import { configure, setAddon, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';
import chaptersAddon from 'react-storybook-addon-chapters';
import { setOptions } from '@storybook/addon-options';

// import 'github-markdown-css/github-markdown.css';
// import 'highlight.js/styles/github.css';
// import hljs from 'highlight.js/lib/highlight';
// import hljsJavascript from 'highlight.js/lib/languages/javascript';
// import marksy from 'marksy/components'

// hljs.registerLanguage('javascript', hljsJavascript);
addDecorator((story, context) => withInfo('common info')(story)(context));
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
