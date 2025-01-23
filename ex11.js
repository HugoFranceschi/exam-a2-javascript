function premiereLettreMajuscule(chaine) {
	let tableauMots = chaine.split(" ");

	for (let i = 0; i < tableauMots.length; i++) {
		tableauMots = tableauMots[0].toUpperCase() + chaine.slice(1);
	}
	return tableauMots;
	// chaine = chaine[0].toUpperCase() + chaine.slice(1);
}

console.log(premiereLettreMajuscule("bonjour tout le monde")); // Résultat attendu : "Bonjour Tout Le Monde"
