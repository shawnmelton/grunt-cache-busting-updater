/**
 * grunt-cache-busting-updater
 * 
 * Copyright (c) 2015 Shawn Melton
 */

'use strict';

module.exports = function(grunt) {

    grunt.registerMultiTask('cacheBustingUpdater', 'Translate HTML Template', function() {

        /**
         * Replace cache buster placeholder [CACHEBUSTERTIMESTAMP] with a timestamp
         *
         * @param readFile <String> - file name and path that we need to parse.
         * @param writeFile <String> - file name and path that we need to write output to.
         */
        var replaceCacheBuster = function(readFile, writeFile) {
                grunt.log.writeln('Reading from file: '+ readFile);
                var contents = grunt.file.read(readFile);
                grunt.file.write(writeFile, contents.replace(/\[CACHEBUSTERTIMESTAMP\]/g, new Date().getTime()));
                grunt.log.writeln('Writing to file: '+ writeFile);
            },

            /**
             * Make sure that provided object has required properties and values are valid.
             * @param <Object> file
             */
            validateFile = function(file) {
                // Each file should have the following properties: src, dest and locale
                if(!('src' in file) || !('dest' in file)) {
                    return grunt.log.warn('Configuration is not properly set up.  Each file must have source and destintation.');
                }

                file.src.forEach(function(srcFile) {
                    // Make sure that the source file exists.
                    if(!grunt.file.exists(srcFile)) {
                        return grunt.log.warn('The source file "'+ file.src +'" was not found.');
                    }
                });
            };

        this.files.forEach(function(file) {
            validateFile(file);
            replaceCacheBuster(file.src, file.dest);
        });

        grunt.log.writeln('Got to cache busting updater.');
    });

};