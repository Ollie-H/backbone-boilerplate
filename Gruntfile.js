'use strict';

var opt = require('./options');

module.exports = function(grunt) {

	var mozjpeg = require('imagemin-mozjpeg');

	grunt.initConfig({

		 pkg: grunt.file.readJSON('package.json'),

		//jshint config 
		jshint: {
			files: ['assets/js/*.js, assets/js/**/*.js', '!assets/js/libs/*.js'],
			options: {
			  globals: {
				 jQuery: true,
				 console:true
			  }
			}
		},

		/* Underscore templates */
		jst: {
		  compile: {
		    options: {
				templateSettings: {
					interpolate : /\{\{(.+?)\}\}/g
				},
				/* Wrap as AMD module */
				amd: true,
				processName: function(filepath) {
					filepath = filepath.toLowerCase().split('/');
					return filepath[filepath.length-1].replace('.html', '');
				}
		    },
		    files: {
		      "assets/js/templates/templates.js": ["assets/js/templates/*.html"]
		    }
		  }
		},

		requirejs: {
	      compile: {
	        options: opt
	      }
	    },

		//less
		less: {
			development: {
				options: {
					paths: ["assets/styles"],
					yuicompress: true,
					compress: true
				},
				files: {
					"assets/css/style.css": "assets/less/style.less"
				}
			},
			production: {
				options: {
					paths: ["assets/styles"],
					yuicompress: true,
					compress: true
				},
				files: {
					"assets/css/style.css": "assets/less/style.less"
				}
			}
		},

		// Auto-prefixer
		autoprefixer: {
            options: {
                browsers: ['opera 12', 'ff 15', 'chrome 25', 'ie 8']
            },

            single_file: {
                src: 'assets/css/style.css',
                dest: 'assets/css/style.min.css'
            }
		},

		//watch
		watch: {
			styles: {
				files: ['assets/less/*.less', 'assets/less/**/*.less'],
				tasks: ['less']
			},
			script: {
				files: ['assets/js/*.js', 'assets/js/**/*.js', '!assets/js/dist/*.js', '!assets/js/dist/**/*.js'],
				tasks: ['jshint','jst', 'requirejs']
			},
			images: {
				files: ['assets/images/src/*', 'assets/images/src/**/*'],
				tasks: ['imagemin']
			},
			css: {
                files: ['assets/css/style.css'],
                tasks: ['autoprefixer']
            }
		},

		imagemin: {

		  options: {
			 cache: false,
			 optimizationLevel: 5
		  },

		  dist: {
			 files: [{
				expand: true,
				cwd: 'assets/images/src',
				src: ['**/*.{png,jpg,gif,cur}'],
				dest: 'assets/images/optimized/'
			 }]
		  }

		}

	});

  //load modules
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-jst');
  
  //default task 
  grunt.registerTask('default', ['jshint', 'jst', 'requirejs', 'less', 'autoprefixer']);
  grunt.registerTask('prefix', ['autoprefixer']);
  grunt.registerTask('images', ['imagemin']);

  //other tasks 
  grunt.registerTask('styles', 'less');
  grunt.registerTask('test', 'jshint');

};