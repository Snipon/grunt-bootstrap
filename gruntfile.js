'use strict';

module.exports = function(grunt) {

  // Configuration goes here
  grunt.initConfig({
    coffee: {
      compile: {
        files: {
          'app/assets/js/main.js': ['src/**/*.coffee']
        }
      }
    },

    less: {
      develop: {
        files: {
          "app/assets/css/main.css": "src/less/main.less"
        }
      }
    },

    html2js: {
      dist: {
        options: {
          module: null, // no bundle module for all the html2js templates
          base: '.'
        },
        files: [{
          expand: true,
          src: ['src/views/**/*.html'],
          ext: '.html.js'
        }]
      }
    },

    jshint: {
      all: ['app/assets/js/main.js'],
      options: {
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },

    uglify: {
      dist: {
        files: {
          'app/assets/js/main.min.js': ['app/assets/js/main.js'],
          'app/assets/js/vendor.min.js': ['app/assets/js/vendor.js']
        }
      }
    },

    concat: {
      dist: {
        files: {
          'app/assets/js/vendor.js': [
            // 'vendor/jquery/jquery.js',
            // 'vendor/bootstrap/js/*.js',
            'vendor/angular/angular.js'
          ],
          'app/assets/css/main.min.css': 'app/assets/css/*.css'
        }
      }
    },

    copy: {
      main: {
        files: [
          {expand: true, cwd: 'src/', src: ['index.html'], dest: 'app/', filter: 'isFile'},
          {expand: true, cwd: 'src/img/', src: ['**'], dest: 'app/assets/img/', filter: 'isFile'},
        ]
      }
    }
  });

  // Load plugins here
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-regarde');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-html2js');

  // Define your tasks here
  grunt.registerTask('default', ['less', 'coffee', 'html2js', 'jshint', 'concat', 'uglify', 'copy']);
};