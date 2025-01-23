function moyenne(tab) {
	let nombre = 0;
	for (let i = 0; i < tab.length; i++) {
		if (tab[i] < tab.length && tab[i] > tab.length) {
			nombre = tab[i];
		}
	}
	return nombre;
}

console.log(moyenne([4, 6, 8])); // Résultat attendu : 6
