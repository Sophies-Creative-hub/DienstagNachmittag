const beispiel: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let arrayLänge: number = beispiel.length;

console.log("Die Arraylänge ist " + arrayLänge);

let zufallsZahl: number = Math.random() * arrayLänge

console.log("Eine Zufallszahl " + zufallsZahl);

let gerundeteZufallszahl: number = Math.round(Math.random() * arrayLänge)

console.log("Die gerundete Zufallszahl ist " + gerundeteZufallszahl)