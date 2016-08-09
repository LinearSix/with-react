'use strict';

module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'app.js': /^app/,
        'vendor.js': /^node_modules/
      }
    },

    stylesheets: {
      joinTo: {
        'app.css': /^app/
      }
    }
  },

  plugins: {
    babel: {
      presets: ['es2015', 'react']
    },

    postcss: {
      processors: [require('postcss-import')({ path: 'app/styles' })]
    }
  },

  server: {
    port: 8000
  }
};
