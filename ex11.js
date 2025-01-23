function premiereLettreMajuscule(chaine) {
	chaine = chaine[0].toUpperCase() + chaine.slice(1);
	chaine.split(" ");
	return chaine;
}

console.log(premiereLettreMajuscule("bonjour tout le monde")); // Résultat attendu : "Bonjour Tout Le Monde"
