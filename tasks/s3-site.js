/*
 * grunt-s3-site
 *
 * Copyright (c) 2014 First Opinion
 */

'use strict';


// ----------------------------------------------------------------------------
// Dependencies
// ----------------------------------------------------------------------------

// Core
var path = require('path');

// Third Party
var s3site = require('s3-site');


// ------------------------------------------------------------------------------
// Register Multi Task
// ------------------------------------------------------------------------------

module.exports = function(grunt) {

  grunt.registerMultiTask('s3site', 'Create, manipulate, and deploy static websites to Amazon S3', function() {
    // Async Task
    var done = this.async();

    // Define required opts
    var requiredOpts = ['name'];

    //
    // Helper method to check for required opts
    //
    var hasRequiredOpts = function () {
      var isValid = true;

      for (var i = 0, l = requiredOpts.length; i < l; i++) {
        if (!options[requiredOpts[i]]) {
          grunt.log.error('Error: ' + requiredOpts[i] + ' is a required option');
          isValid = false;
        }
      }

      return isValid;
    };

    // Mixin with defaults - Maybe later
    var options = this.options({
      srcPath: path.resolve('dist')
    });

    var s3config = options['s3config'];
    delete options['s3config'];

    // If missing required opts exit
    if (!hasRequiredOpts()) { return false; }

    // Deploy site
    s3site.deploy(options, s3config, function (err, data) {
      done(err ? false : true);
    });
  });

};
