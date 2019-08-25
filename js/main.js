function func() {
	var radius1 = document.getElementById('radius');
	var nPoints1 = document.getElementById('nPoints');
	var piCalculation = document.getElementById('piCalculation');
	var radius = Number(radius1.value);
	var nPoints = Number(nPoints1.value);
	var circlePoints = 0; // количество точек, входящих в круг
	
	for( i = 0; i < nPoints; i++) {
		x = Math.random() * Math.random() * radius;
		y = Math.random() * radius;		
		if ( Math.pow(x,2) + Math.pow(y,2)  <= Math.pow(radius,2) ) { 
			circlePoints++;		
		}	
	}
	piCalculation = (4 * circlePoints) / nPoints;
	piC.innerHTML = piCalculation;
}


	 /*
		x = Math.random()* () getRandomArbitary( -radius, radius); // рандом х,у 
		y = getRandomArbitary( -radius, radius);

		if ( Math.pow(x,2) + Math.pow(y,2)  <= Math.pow(radius,2) ) { 
			circlePoints++; // счет точек попавших в круг
		}		

	}

	piCalculation = (4 * circlePoints) / nPoints;
	piCalculation.innerHTML = piCalculation;

	var c = radius + nPoints;
	piCalculation.innerHTML = c; */

	// функция рандома числа 
	/*
	function getRandomArbitary(min, max) {
		return Math.random() * (max - min) + min;
	}
x = Math.random() * (radius - (-radius)) + (-radius);


	/*
	// функция рандома числа
	function getRandomArbitary(min, max)
	{
		return Math.random() * (max - min) + min;
	}

	for( i = 0; i < nPoints; i++) { 
		x = Math.random()* () getRandomArbitary( -radius, radius); // рандом х,у 
		y = getRandomArbitary( -radius, radius);
	*/



	/* 
	var c = +radius.value + +nPoints.value;
	alert(c);

	 /*var piCalculation = document.getElementById('piCalculation');
	piCalculation = radius + nPoints;*/ 

	/* piCalculation.innerHTML = c;*/ 
