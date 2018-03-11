import Turndown from 'turndown';
const turndownPluginGfm = require('turndown-plugin-gfm')

const { gfm } = turndownPluginGfm;
const turndownService = new Turndown();
turndownService.use(gfm);

export const htmlToMd = (html) => turndownService.turndown(html);
