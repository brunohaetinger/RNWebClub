/**
 * $ esbuild --bundle index.web.js --outfile=dist/esbuild/bundle.web.js --resolve-extensions=.web.jsx,.web.js,.jsx,.js --loader:.js=jsx --minify
 */
require('esbuild')
  .build({
    entryPoints: ['index.web.js'],
    bundle: true,
    outfile: 'dist/esbuild/bundle.web.js',
    resolveExtensions: ['.web.jsx', '.web.js', '.jsx', '.js'],
    minify: true,
    loader: {
      '.js': 'jsx',
    },
    define: {
      'process.env.NODE_ENV': '"production"',
    },
  })
  .catch(() => process.exit(1));
