function func() {
	var radius1 = document.getElementById('radius');
	var nPoints1 = document.getElementById('nPoints');
	var radius = Number(radius1.value);
	var nPoints = Number(nPoints1.value);
	var circlePoints = 0; // количество точек, входящих в круг
	
	for( i = 0; i < nPoints; i++) {
		x = Math.random() * radius;
		y = Math.random() * radius;		
		if ( Math.pow(x,2) + Math.pow(y,2)  <= Math.pow(radius,2) ) { 
			circlePoints++;		
		}	
	}
	piCalculation = (4 * circlePoints) / nPoints;
	piC.innerHTML = piCalculation;
}

