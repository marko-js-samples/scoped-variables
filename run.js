var template = require('marko').load(require.resolve('./template.marko'));
template.stream({})
    .pipe(process.stdout);