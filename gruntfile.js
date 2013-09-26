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
          'app/assets/css/vendor.min.css': 'app/vendor/**/*.css',
          'app/assets/css/main.min.css': 'app/assets/css/*.css'
        }
      }
    },

    ngtemplates:  {
      Weblight: {
        options:  { base: 'src/views' },
        src:      [ 'src/views/**.html' ],
        dest:     'app/assets/js/templates.js'
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
  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-regarde');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Define your tasks here
  grunt.registerTask('default', ['concat', 'coffee', 'jshint', 'uglify', 'less', 'copy', 'ngtemplates']);
};