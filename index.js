const { spawn } = require('child_process');
const path = require('path');

const executeScript = (scriptName, url, time) => {
console.log('\x1b[1;33m%s\x1b[0m', 'Copyright: C322Y');
  const scriptPath = path.join(__dirname, 'lib', `${scriptName}.js`);
  const child = spawn('node', [scriptPath, url, time], {
    stdio: 'inherit',
    shell: true
  });

  child.on('error', (err) => {
    console.error(`Error executing ${scriptName}:`, err);
  });
};

module.exports = {
  SlowRiss: (url, time) => executeScript('slowRiss', url, time),
  netTcp: (url, time) => executeScript('netTcp', url, time),
  fastDuck: (url, time) => executeScript('fastDuck', url, time),
  CrawlDos: (url, time) => executeScript('CrawlDos', url, time),
  httpEndpoint: (url, time) => executeScript('httpEndpoint', url, time)
};
