function estPalindromeAvance(chaine) {
	let j = chaine.length - 1;
	for (let i = 0; i < chaine.length / 2; i++) {
		if (chaine[i] != chaine[j]) {
			return false;
		}
		j--;
	}
	return true;
}

console.log(estPalindromeAvance("a man a plan a canal panama")); // Résultat attendu : true
