// In EcmaScript 5...
const nodePandoc = require('node-pandoc');

const src = '../docs/01_preface.md';

// Arguments can be either a single string:
const args = '-f docx -t markdown -o ../README.md';

// Set your callback function
const callback = (err, result) => {
  if (err) {
    console.error('Oh Nos: ', err);
  }

  // For output to files, the 'result' will be a boolean 'true'.
  // Otherwise, the converted value will be returned.
  console.log(result);
  return result;
};

// Call pandoc
nodePandoc(src, args, callback);
