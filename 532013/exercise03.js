for(var i = 1; i <= 10; i++){
	var s = 0;
	for (var j = 1; j <= 10; j++) {		
		if(i === j)
			var s = s + "1, ";
		else
			var s = s + "0, ";		
	}
	console.log(s);
}


//questa sotto ok
for(var i = 1; i <= 10; i++){
	var s = 0;
	for (var j = 1; j <= 10; j++) {		
		if(s === 0){
			if(i === j)
				var s = "1";
			else
				var s = "0";
		}
		else{
			if(i === j)
				var s = s + "1";
			else
				var s = s + "0";	
		}
		if(j <= 9)
			var s = s + ", ";
	}
	console.log(s);
}