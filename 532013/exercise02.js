for(var i = 1; i <= 10; i++){
	var s = 0;
	for (var j = 1; j <= 10; j++) {
		var ris = i*j;
		if(s === 0)
			var s =  ris;
		else
			var s = s + ris;
		
		if(j <= 9)
			var s = s + ", ";
	}
	console.log(s);
}