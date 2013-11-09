'use strict';

module.exports = function(grunt) {

  // Configuration goes here
  grunt.initConfig({
    coffee: {
      compile: {
        files: {
          'app/assets/js/main.js': ['src/cs/main.coffee']
        }
      }
    },

    less: {
      vendor: {
        files: {
          'app/assets/css/vendor.css': 'vendor/bootstrap/less/bootstrap.less'
        }
      },

      main: {
        files: {
          'app/assets/css/main.css': 'src/less/main.less'
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
      vendor: {
        files: {
          'app/assets/js/vendor.min.js': ['app/assets/js/vendor.js']
        }
      },

      main: {
        files: {
          'app/assets/js/main.min.js': ['app/assets/js/main.js']
        }
      }
    },

    concat: {
      scripts: {
        'src': [
          'vendor/jquery/jquery.js',
          'vendor/underscore/underscore.js'
          // 'vendor/bootstrap/js/*.js',
          //'vendor/angular/angular.js'x
        ],
        'dest': 'app/assets/js/vendor.js'
      }
    },

    copy: {
      main: {
        files: [
          {expand: true, cwd: 'src/', src: ['index.html'], dest: 'app/', filter: 'isFile'},
          {expand: true, cwd: 'src/img/', src: ['**'], dest: 'app/assets/img/', filter: 'isFile'},
        ]
      }
    },

    watch: {
      options: {
        dateFormat: function(time) {
          grunt.log.writeln('The watch finished in ' + time + 'ms at' + (new Date()).toString());
          grunt.log.writeln('Waiting for more changes...');
        },
      },

      scripts: {
        files: 'src/cs/*.coffee',
        tasks: ['coffee', 'jshint', 'uglify:main'],
      },

      css: {
        files: 'src/less/*.less',
        tasks: ['less:main']
      },

      html: {
        files: ['src/*html', 'src/img/*'],
        tasks: ['copy']
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
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Define your tasks here
  grunt.registerTask(
    'default', ['less', 'coffee', 'html2js', 'jshint', 'concat', 'uglify', 'copy', 'watch']
  );
};