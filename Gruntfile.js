module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    config: {
      src : 'src',
      dist : 'public',
      src_s: 'sedona_feedback_page/js/'
    },

     uglify: {
      min: {
        src: '<%= config.src_s %>script.js',
        dest: '<%= config.src_s %>script.min.js'
      }
    },
    // concat: {
    //   options: {
    //     separator: ';',
    //   },
    //   dist: {
    //     src: ['src/intro.js', 'src/project.js', 'src/google-map.js'],
    //     dest: 'js/script.js',
    //   },
    // },
    // Lint Spaces in code
    lintspaces: {
      all: {
        src: [
          '*.html'
        ],
        options: {
          newline: true,
          newlineMaximum: 2,
          trailingspaces: true,
          indentationGuess: true,
          editorconfig: '.editorconfig',
          ignores: [
            'html-comments',
            'js-comments'
          ],
          showTypes: true,
          showCodes: true
        }
      }
    }
  });

  require('load-grunt-tasks')(grunt);
  // grunt.loadNpmTasks('grunt-lintspaces');

  grunt.registerTask('lint', ['lintspaces']);
  grunt.registerTask('min', ['uglify']);
};
