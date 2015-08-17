function func(){
	var a = 1;
	var b = 2;
	return a + b;
}

function func2(){
	console.log(22);
}
console.log('a.js init');

if(!function(){}.bind){
	Function.prototype.bind = function(context){
		var self = this;
		,	args = Array.prototype.slice.call(arguments);

		return function(){
			return self.apply(context,args.slice(1));
		}
	}
}
