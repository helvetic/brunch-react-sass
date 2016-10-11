module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^(?!app)/,
        'app.js': /^app/
      }
    },
    stylesheets: {
      joinTo: 'css/app.css',
      order: {
        before: ['vendor/styles/normalize.css']
      }
    }
  },

  plugins: {
    babel: {presets: ['es2015', 'react']},
    sass: {
      mode: 'native',
      allowCache: true,
      modules: true
    }
  },

  server: {
    port: 6832
  }
};
