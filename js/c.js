// es6
function define(depNames,moduleFunction){
	var myMod = currentMod;
	var deps = depNames.map(getModule);

	deps.forEach(function(){
		if(!mod.loaded){
			mod.onLoad.push(whenDepsLoaded);
		}
	});

	function whenDepsLoaded(){
		if(!deps.every(function(m){return m.loaded;}))
			return;
		var args = deps.map(function(m){return m.exports;});
		var exports = moduleFunction.apply(null,args);
		if(myMod){
			myMod.exports = exports;
			myMod.loaded = true;
			myMod.onLoad.forEach(function(f){f();});
		}
	}
	whenDepsLoaded();
}
