function sommePairs(tab) {
	let nombre = 0;
	for (let i = 0; i < tab.length; i++) {
		if (tab[i] % 2 == 0) {
			nombre = nombre + tab[i];
		}
	}
	return nombre;
}

console.log(sommePairs([1, 2, 3, 4])); // Résultat attendu : 6
