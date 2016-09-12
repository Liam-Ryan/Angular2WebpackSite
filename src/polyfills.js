"use strict";
require('core-js/es6');
require('core-js/es7/reflect');
require('zone.js/dist/zone');
if (process.env.ENV === 'production') {
}
else {
    // Development
    require('zone.js/dist/long-stack-trace-zone');
    Error['stackTraceLimit'] = Infinity;
}
//# sourceMappingURL=polyfills.js.map