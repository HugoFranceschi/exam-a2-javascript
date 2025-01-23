function filtrerNegatifs(tab) {
	let nombre = [];
	for (let i = 0; i < tab.length; i++) {
		if (tab[i] % 2 == 0 && tab[i] >= 0) {
			nombre.push(tab[i]);
		}
	}
	return nombre;
}

console.log(filtrerNegatifs([-3, 4, -1, 6])); // Résultat attendu : [4, 6]
