require('esbuild')
  .build({
    entryPoints: ['index.web.js'],
    bundle: true,
    outfile: 'dist/esbuild/bundle.web.js',
    resolveExtensions: ['.web.jsx', '.web.js', '.jsx', '.js'],
    sourcemap: true,
    watch: true,
    incremental: true,
    logLevel: 'info',
    loader: {
      '.js': 'jsx',
    },
    define: {
      'process.env.NODE_ENV': '"development"',
    },
  })
  .catch(() => process.exit(1));
