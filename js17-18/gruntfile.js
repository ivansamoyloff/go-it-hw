module.exports = function(grunt) {

    grunt.initConfig({
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['script/src/*.js'],
                dest: 'script/script.main.js'
            }
        },
        uglify: {
            dist:{
                src:['script/script.main.js'],
                dest:'script/script.main.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['concat', 'uglify']);

};