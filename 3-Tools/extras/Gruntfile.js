module.exports = function(grunt) {

		// Project configuration.
		grunt.initConfig({
			pkg: grunt.file.readJSON('package.json'),
			// Set up configuration options
			sass: {
					dist: {
							options: {
									includePaths: ['imports/are/here/'],
									outputStyle: 'nested'
							},
							files: {
									'main.css': 'main.scss'
							}
					}
			}
		});

		// Load the task plugins
		grunt.loadNpmTasks('grunt-sass');

		// Define Tasks.
		grunt.registerTask('default', ['sass']);

};