var async = require('async')

var start = new Date

async.waterfall([
	function (callback) {setTimeout(callback, 100);},
	function (callback) {setTimeout(callback, 300);},
	function (callback) {setTimeout(callback, 200);}
	],
function(err, results) {
	console.log('Completed in' + (new Date -start) + 'ms')
})