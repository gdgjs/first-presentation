'use strict';

module.exports = function (grunt) {

  // Load tasks
  require('load-grunt-tasks')(grunt);

  // Grunt init config
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    meta: {
      pathSass: 'theme/scss',
      pathCSS: 'theme/css'
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