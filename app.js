const mediumToMarkdown = require('medium-to-markdown');
const { write } = require('./write');

var path = require('path');

var args = process.argv.slice(2);
const [ url ] = args;
console.log('args', args);

// example url, 'https://levelup.gitconnected.com/snippets-for-vs-code-6b36fc4ef11f'

// Enter url here
async function convert() {
  const markdown = await mediumToMarkdown.convertFromUrl(url);
  try {
    const fullPath = path.join(__dirname, 'markdown.md');
    const result = await write(fullPath, markdown);
    console.log('Result', result);
  } catch (err) {
    console.error(err);
  }
}

convert();

