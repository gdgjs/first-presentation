'use strict';

module.exports = function (grunt) {

  // Load tasks
  require('load-grunt-tasks')(grunt);

  // Grunt init config
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    meta: {
      pathSass: 'public/assets/_sass',
      pathJS: 'public/assets/js',
      pathJSBuild: 'public/build/js',
      pathCSS: 'public/build/css',
      pathImg: 'public/build/img'
    },

    compass: {
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    },

    watch: {
      compass: {
        files: ['<%= meta.pathSass %>/**/*.{scss,sass}'],
        tasks: ['compass']
      }
    }

  });

  grunt.registerTask('default', ['watch']);

};