module.exports = function(grunt) {

  grunt.initConfig({

    // Import package manifest
    pkg: grunt.file.readJSON('package.json'),

    // Banner definitions
    meta: {
      banner: '/*\n' +
        ' *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n' +
        ' *  <%= pkg.description %>\n' +
        ' *  <%= pkg.homepage %>\n' +
        ' *\n' +
        ' *  Made by <%= pkg.author.name %>\n' +
        ' *  Under <%= pkg.license %> License\n' +
        ' */\n'
    },

    // Concat definitions
    concat: {
      options: {
        banner: '<%= meta.banner %>'
      },
      dist: {
        files: {
          'dist/jquery.popSelect.js': ['src/jquery.popSelect.js'],
          'dist/jquery.popSelect.css': ['css/jquery.popSelect.css']
        }
      }
    },

    // Lint definitions
    jshint: {
      files: ['src/jquery.popSelect.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Minify definitions
    uglify: {
      my_target: {
        src: ['dist/jquery.popSelect.js'],
        dest: 'dist/jquery.popSelect.min.js'
      },
      options: {
        banner: '<%= meta.banner %>'
      }
    },

    cssmin: {
      target: {
        files: {
          'dist/jquery.popSelect.min.css': ['dist/jquery.popSelect.css']
        }
      }
    },

    // watch for changes to source
    // Better than calling grunt a million times
    // (call 'grunt watch')
    watch: {
      files: ['src/*'],
      tasks: ['default']
    }

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('build', ['concat', 'uglify', 'cssmin']);
  grunt.registerTask('default', ['jshint', 'build']);
  grunt.registerTask('travis', ['default']);

};
