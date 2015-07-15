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
	lambda_deploy: {
    	default: {
    		arn: 'arn:aws:lambda:us-east-1:1234567890123:function:CreateThumbnail'
    	}
    },
	lambda_package: {
    	default: {
    		include_time: false
    	}
	}
});

grunt.registerTask('deploy', ['lambda_package', 'lambda_deploy'])
