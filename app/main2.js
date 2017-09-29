// Loop attempt

// var regFlavor1 = document.getElementById('regFlavor1');

// for (var i = 0; i < regFlavors.length; i++) {
// 	for (var j = 0; j < regFlavors.length; j++) {
// 		regFlavor1.innerHTML = regFlavors[i];
//     	console.log(regFlavors[i][j]);
// 	}
// }

// Print all arrays on screen 

for (var i = 0; i < regFlavors.length; i++) {
	document.write(
		"Regular Flavor " + i + " : " +
		regFlavors[i] + "<br />");
}

for (var i = 0; i < seasonalFlavors.length; i++) {
      document.write(
        "Seasonal Flavor " + i + " : " +
        seasonalFlavors[i] + "<br />");
}

for (var i = 0; i < servingOptions.length; i++) {
      document.write(
        "Serving Option " + i + " : " +
        servingOptions[i] + "<br />");
}

for (var i = 0; i < toppings.length; i++) {
      document.write(
        "Toppings " + i + " : " +
        toppings[i] + "<br />");
}