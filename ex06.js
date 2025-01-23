function doublons(tab) {
	let tableauNombre = [];

	for (let i = 0; i < tab.length; i++) {
		tableauNombre.push(tab[i] * 2);
	}
	return tableauNombre;
}

console.log(doublons([1, 2, 3])); // Résultat attendu : [2, 4, 6]
