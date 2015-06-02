var grunt = require('grunt');
grunt.loadNpmTasks('grunt-aws-lambda');

grunt.initConfig({
    lambda_invoke: {
        default: {
            options: {
                file_name: 'CreateThumbnail.js'
            }
        }
    },
    lambda_package: {
        default: {
            options: {
                include_time: false
            }
        }
    }
});
