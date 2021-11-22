const  {resolve} = require('path');

 const ROOT = process.cwd();
 const PACKAGE_JSON = resolve(ROOT, 'package.json');
 const PUBLIC = resolve(ROOT, 'public');
 const BUNDLE_NAME = 'bundle.js';
 const BUNDLE = resolve(PUBLIC, BUNDLE_NAME);
 const UNIQUE_BUNDLE_NAME = `bundle_${require(PACKAGE_JSON).version}.js`;
 const UNIQUE_BUNDLE = resolve(PUBLIC, UNIQUE_BUNDLE_NAME);
 const SOURCE = resolve(ROOT, 'src');
 const ENTRYPOINT = resolve(SOURCE, 'index.tsx');
 const SETUP =  resolve(SOURCE, 'Setup')
 const UTILITY =  resolve(SOURCE, 'Utility')
 const COMPONENT = resolve(SOURCE, 'Component')
 const CONSTANT = resolve(SOURCE, 'Constant')
 const STORE = resolve(SOURCE, 'Store')
 const TYPE = resolve(SOURCE, 'Type');
 const LOCAL = resolve(__dirname, '..');
 const STATIC = resolve(LOCAL, 'static');
 const HTML_TEMPLATE =  resolve(STATIC, 'index.html');

module.exports = {
   ROOT,
   PUBLIC,
   BUNDLE_NAME,
   BUNDLE,
   UNIQUE_BUNDLE_NAME,
   UNIQUE_BUNDLE,
   SOURCE,
   ENTRYPOINT,
   SETUP,
   UTILITY,
   COMPONENT,
   CONSTANT,
   STORE,
   TYPE,
   HTML_TEMPLATE,
   STATIC
}