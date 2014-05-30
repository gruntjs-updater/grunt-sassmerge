/*
 * grunt-sassmerge
 * https://github.com/designst/grunt-sassmerge
 *
 * Copyright (c) 2014 designst
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('sassmerge', 'Merge SASS variables.', function() {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
            removeDefault: false
        });

        // Iterate over all specified file groups.
        this.files.forEach(function(f) {
            // Concat specified files.
            var src = f.src.filter(function(filepath) {
                // Warn on and remove invalid source files (if nonull was set).
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    return true;
                }
            }).map(function(filepath) {
                // Read file source.
                return grunt.file.read(filepath);
            }).join(grunt.util.normalizelf('\n'));

            var regexp = new RegExp('(\\$.*:)\\s*(.*;)', 'gi');
            var match, newMatches = [];
            var date = new Date();
            var dest = '';

            if (grunt.file.exists(f.dest)) {
                dest = grunt.file.read(f.dest);
            }

            var _match;

            while (match = regexp.exec(src)) {
                if (dest.indexOf(match[1]) === -1) {
                    _match = match[0].replace(/\s{2,}/g, ' ');

                    if (options.removeDefault) {
                        _match = _match.replace(/\s*(!default)/g, '');
                    }

                    newMatches.push(_match);
                }
            }

            if (newMatches.length) {
                dest += '\n\n// Merge SASS variables BEGIN (' + date.toISOString() + ')\n';
                dest += newMatches.join('\n');
                dest += '\n// Merge SASS variables END';

                // Write the destination file.
                grunt.file.write(f.dest, dest);
            }

            // Print a success message.
            grunt.log.writeln('File "' + f.dest + '" merged.');
        });
    });
};