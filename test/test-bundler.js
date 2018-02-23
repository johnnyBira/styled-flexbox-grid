import 'jest-enzyme';
import 'jest-styled-components';
import { JSDOM } from 'jsdom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import shallowWithTheme from './utils/shallowWithTheme';

const doc = new JSDOM('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;
// global.shallowWithTheme = shallowWithTheme;
global.requestAnimationFrame = (cb) => {
  setTimeout(cb, 0);
};

configure({ adapter: new Adapter() });
