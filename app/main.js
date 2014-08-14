require.config({
	baseUrl: '/app',
	paths: {
		jquery: '../bower_components/jquery/dist/jquery',
		user2: 'user2'
	},
	bundles: {
		'mybundle': ['b1', 'b2']
	}
});

require(['jquery', 'user2']);