function compterVoyelles(chaine) {
	let nombre = 0;
	for (let i = 0; i <= chaine.length; i++) {
		if (
			chaine.length == "a" ||
			chaine.length == "e" ||
			chaine.length == "i" ||
			chaine.length == "o" ||
			chaine.length == "u" ||
			chaine.length == "y"
		) {
			nombre = nombre + 1;
		}
	}
	return nombre;
}

console.log(compterVoyelles("bonjour")); // Résultat attendu : 3
