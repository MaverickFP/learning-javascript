for(var i = 1; i <= 10; i++){
	for (var j = 1; j <= 10; j++) {
		var ris = i*j;
		var s = ris + " ";
		console.log(s);
	}
	console.log("\n");
}


//altro modo

for(var i = 1; i <= 10; i++){
	var s = 0;
	for (var j = 1; j <= 10; j++) {
		var ris = i*j;
		if(s === 0)
			var s =  ris + " ";
		else
			var s = s + ris + " ";
		//console.log(s);
	}
	console.log(s);
}