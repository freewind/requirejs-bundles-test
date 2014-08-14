define(['b1', 'b2'], function(b1, b2) {
	console.log('enter user2');
	b1.hello();
	b2.hello();
	return {
		hello: function() {
			console.log('hello: user2');
		}
	}
});