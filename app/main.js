require.config({
	baseUrl: '/app',
	paths: {
		jquery: '../bower_components/jquery/dist/jquery',
		user2: 'user2',
		mybundleSet: 'mybundle'
	},
	bundles: {
		mybundleSet: ['b1', 'b2']
	}
});

require(['jquery', 'user2']);