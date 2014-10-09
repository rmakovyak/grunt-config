'use strict';
var LIVERELOAD_PORT = 35730;
var SERVER_PORT = 9000;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
// var proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest;
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'
// templateFramework: 'lodash'

module.exports = function (grunt) {
    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    // configurable paths
    var projectConfig = {
        app: 'app',
        dist: 'dist'
    };

    grunt.initConfig({
        project: projectConfig,
        watch: {
            options: {
                nospawn: true,
                livereload: false
            },          
            livereload: {
                options: {
                    livereload: LIVERELOAD_PORT
                },
                files: [
                    '<%= project.app %>/*.html',
                    '<%= project.app %>/html/*.html',
                    '<%= project.app %>/css/*.css',
                    '<%= project.app %>/js/*.js',
                    '<%= project.app %>/img/{,*/}*.{png,jpg,jpeg,gif,webp}'
                ]
            }
        },
        connect: {
            options: {
                port: SERVER_PORT,
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            // proxies: [
            //     {
            //         context: '/ext_api',
            //         host: '54.236.222.7',                    
            //         changeOrigin: true
            //     }
            // ],
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            lrSnippet,                         
                            mountFolder(connect, '')
                            // proxySnippet
                        ];
                    }
                }
            }           
        },
        open: {
            server: {
                path: 'http://localhost:<%= connect.options.port %>/app'
            }
        }
    });

    grunt.registerTask('server', function () {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run(['serve:' + target]);
    });

    grunt.registerTask('serve', function (target) {
        grunt.task.run([         
            'connect:livereload',
            // 'configureProxies',            
            'open:server',
            'watch'
        ]);
    });

    grunt.registerTask('build', [
        // Configure build tasks as u like here
    ]);
};
