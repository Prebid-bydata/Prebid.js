
[it, describe].forEach((ob) => {
  ob.only = function () {
    [
      'describe.only and it.only are disabled unless you provide a single spec --file,',
      'because they can silently break the pipeline tests',
      // eslint-disable-next-line no-console
    ].forEach(l => console.error(l))
    throw new Error('do not use .only()')
  }
})

require('./test_deps.js');

var testsContext = require.context('.', true, /_spec$/);
testsContext.keys().forEach(testsContext);

window.$$PREBID_GLOBAL$$.processQueue();
