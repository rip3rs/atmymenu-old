module.exports = function(grunt) {

    grunt.initConfig({

        less: {
            development: {
                options: {
                    compress: false
                },
                files: { // destination file and source files
                    'app/build/css/style.css': 'app/src/less/all.less'
                }
            },
        },


        jshint: {
            options: {
                node: true,
                jasmine: true,
                esversion: 6
            },
            all: [
                'Gruntfile.js',
                'app/src/**/*.js',
                '!app/src/vendor/*.js'
            ]
        },


        jasmine: {
            tests: {
    			src: [],
    			options: {
    				outfile: 'app/_SpecRunner.html',
    				specs: 'app/build/tests/specs.js'
    			}
		    }
        },


        browserify: {
            development: {
                options: {
                    transform: [
                        [
                            'babelify',
                            {
                                presets: [
                                    'es2015',
                                    'react'
                                ]
                            }
                        ]
                    ],
                    browserifyOptions: {
                        debug: true
                    }
                },
                src: 'app/src/js/**/*.js',
                dest: 'app/build/js/App.js'
            },


            specs: {
                src: ['app/src/tests/**/*.test.js'],
                dest: 'app/build/tests/specs.js',
                options: {
                    browserifyOptions: {
                        debug: true
                    }
                }
            }
        },


        watch: {
            styles: {
                files: ['app/src/less/**/*.less'], // which files to watch
                tasks: ['less:development'],
                options: {
                    nospawn: true
                }
            },

            lint: {
                files: ['app/src/**/*.js'], // which files to watch
                tasks: ['jshint'],
                options: {
                    nospawn: true
                }
            },

            browserify: {
                files: ['app/src/js/**/*.js'], // which files to watch
                tasks: ['browserify']
            }
        }

    });


    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-jsxhint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.registerTask('default', ['less:development', 'jshint', 'browserify', 'jasmine', 'watch']);
    grunt.registerTask('tests', ['jshint', 'browserify:specs', 'jasmine']);

};
