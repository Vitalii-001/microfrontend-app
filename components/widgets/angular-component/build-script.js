const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

  const files =[
    './dist/angular-wc-app/runtime.js',
    './dist/angular-wc-app/polyfills.js',
    './dist/angular-wc-app/main.js'
  ];

  await fs.ensureDir('elements');

  await concat(files, 'elements/ng-greet-element.js');
  console.info('Angular Elements created successfully!')

})();
