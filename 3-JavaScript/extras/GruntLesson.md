#Grunt

##What the heck is it?
Grunt is a taskrunner tool that can be modified to your needs. Need to compile Sass, shrink images, ensure compliance across all devices? Use Grunt.

Grunt is a tool that is built upon tools developed for Node.js. Much like Bower, Yeoman and Gulp.

###Some things Grunt can do

* Validate your Javascript
* Launch a local web server for development
* Convert Jade and Haml to HTML
* Remove ununsed CSS from your files
* Automatically inject SVG code into your project

##Why not just use Prepros?
Grunt works to save you time and maintain a consistent workspace. When working on a team, every member must take the time to set up file output paths and they may not have tools.  With Grunt, one tool needs to be installed on the computer, and a couple simple commands are run to have everyone within the same environment.

##How to Install Grunt

####Install NodeJS

Grunt and Grunt Plugins are installed via NPM (Node.js Package Manager). Visit [http://nodejs.org/](http://nodejs.org/) to install on your machine.

####Install the Command Line Interface

In order to use Grunt, we need to install the tools on our command line

	$ npm install -g grunt-cli

What this command does is the following

* NPM - references Node.js Package Manager
* install - NPM command to install a package to your system
* -g - means install the package globally on your system. May require you to type Sudo.
* grunt-cli - the name of the package.

##What files are important

If you are starting a new project, or integrating Grunt into an existing, the setup process is the same. We need two things, the `package.json` file and a `Gruntfile.js` file. When sharing these files with teammates via Git or even file sharing, it's important that these two files are included, as they are the files that drive Grunt. Create the following files.

####package.json

This file is used by npm to store metadata for projects published as npm modules. You will list grunt and the Grunt plugins your project needs as devDependencies in this file.

####Gruntfile.js

This file is used to configure or define tasks and load Grunt plugins.


##How to use Grunt while starting from scratch

1. In your terminal, navigate to your project folder and then run the `npm init` command.
2. Via the terminal prompt, give your Grunt Project a name, a version, etc, and anything else needed. If you would like to use the defaults, simply press enter at each question.
3. Install Grunt within this project by running the command `npm install grunt --save-dev`
4. Within your Gruntfile.js, insert the following code
		
		module.exports = function(grunt) {

  			// Project configuration.
  			grunt.initConfig({
    			pkg: grunt.file.readJSON('package.json'),
  			});

  			// Default task(s).
  			grunt.registerTask('default', []);

		};
5. Install new plugins using the `npm install pluginName --save-dev` command. This will download the file and add it to your package.json file.
6. Add the task and define it's action within your Gruntfile.js. The following example is using the Grunt Sass task.

		
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

7. Run `grunt` in your terminal!

##How to use an existing Grunt project

1. If `package.json` and `Gruntfile.js` exist in the project folder, simply run `npm install` to install all dependencies listed in package.json
2. Run `grunt` in your command line utilize the tasks.

##How to set up new task groups

By default the `grunt.registerTask('default', []);` portion of the Gruntfile.js is where you list the tasks that want run and in what order they should be run in. However, you can group tasks into relative groups eg Autoprefixer and UnCSS which will only run when you define a task that includes them.

	grunt.registerTask('clean', ['autoprefixer', 'uncss']);
	
##Recommended Grunt Tasks
As always, read the documentation on how to use the plugins

- Autoprefixer [https://github.com/nDmitry/grunt-autoprefixer](https://github.com/nDmitry/grunt-autoprefixer)
- SVG Inject [https://github.com/PencilScoop/grunt-svginject](https://github.com/PencilScoop/grunt-svginject)
- Jade [https://github.com/gruntjs/grunt-contrib-jade](https://github.com/gruntjs/grunt-contrib-jade)