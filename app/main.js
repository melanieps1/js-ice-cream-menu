document.getElementById('regFlavor1').innerHTML = regFlavors[0][0];
document.getElementById('regFlavor2').innerHTML = regFlavors[1][0];
document.getElementById('regFlavor3').innerHTML = regFlavors[2][0];
document.getElementById('desc1').innerHTML = regFlavors[0][1];
document.getElementById('desc2').innerHTML = regFlavors[1][1];
document.getElementById('desc3').innerHTML = regFlavors[2][1];

document.getElementById('seasonalFlavor1').innerHTML = seasonalFlavors[0][0];
document.getElementById('seasonalFlavor2').innerHTML = seasonalFlavors[1][0];
document.getElementById('desc4').innerHTML = seasonalFlavors[0][1];
document.getElementById('desc5').innerHTML = seasonalFlavors[1][1];

document.getElementById('serve1').innerHTML = servingOptions[0][0];
document.getElementById('serve2').innerHTML = servingOptions[1][0];
document.getElementById('serve3').innerHTML = servingOptions[2][0];
document.getElementById('desc6').innerHTML = servingOptions[0][1];
document.getElementById('desc7').innerHTML = servingOptions[1][1];
document.getElementById('desc8').innerHTML = servingOptions[2][1];
document.getElementById('servePrice1').innerHTML = servingOptions[0][2];
document.getElementById('servePrice2').innerHTML = servingOptions[1][2];
document.getElementById('servePrice3').innerHTML = servingOptions[2][2];

document.getElementById('top1').innerHTML = toppings[0][0];
document.getElementById('top2').innerHTML = toppings[1][0];
document.getElementById('top3').innerHTML = toppings[2][0];
document.getElementById('desc9').innerHTML = toppings[0][1];
document.getElementById('desc10').innerHTML = toppings[1][1];
document.getElementById('desc11').innerHTML = toppings[2][1];
document.getElementById('topPrice1').innerHTML = toppings[0][2];
document.getElementById('topPrice2').innerHTML = toppings[1][2];
document.getElementById('topPrice3').innerHTML = toppings[2][2];


// Loop attempt

// var regFlavor1 = document.getElementById('regFlavor1');

// for (var i = 0; i < regFlavors.length; i++) {
// 	for (var j = 0; j < regFlavors.length; j++) {
// 		regFlavor1.innerHTML = regFlavors[i];
//     	console.log(regFlavors[i][j]);
// 	}
// }

// Print all arrays on screen 

// for (var i = 0; i < regFlavors.length; i++) {
// 	document.write(
// 		"Regular Flavor " + i + " : " +
// 		regFlavors[i] + "<br />");
// }

// for (var i = 0; i < seasonalFlavors.length; i++) {
//       document.write(
//         "Seasonal Flavor " + i + " : " +
//         seasonalFlavors[i] + "<br />");
// }

// for (var i = 0; i < servingOptions.length; i++) {
//       document.write(
//         "Serving Option " + i + " : " +
//         servingOptions[i] + "<br />");
// }

// for (var i = 0; i < toppings.length; i++) {
//       document.write(
//         "Toppings " + i + " : " +
//         toppings[i] + "<br />");
// }