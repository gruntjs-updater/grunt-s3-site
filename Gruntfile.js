/*
 * grunt-s3-site
 *
 * Copyright (c) 2014 First Opinion
 */

'use strict';


module.exports = function(grunt) {

  // --------------------------------------------------------------------------
  // Congifuration
  // --------------------------------------------------------------------------

  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js'
      ],
      options: {
        jshintrc: '.jshintrc',
      }
    }
  });


  // --------------------------------------------------------------------------
  // Load Dependencies
  // --------------------------------------------------------------------------

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');


  // --------------------------------------------------------------------------
  // Register Taks
  // --------------------------------------------------------------------------

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint']);

};
