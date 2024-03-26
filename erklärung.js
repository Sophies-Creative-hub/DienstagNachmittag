var beispiel = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var arrayLänge = beispiel.length;
console.log("Die Arraylänge ist " + arrayLänge);
var zufallsZahl = Math.random() * arrayLänge;
console.log("Eine Zufallszahl " + zufallsZahl);
var gerundeteZufallszahl = Math.round(Math.random() * arrayLänge);
console.log("Die gerundete Zufallszahl ist " + gerundeteZufallszahl);
