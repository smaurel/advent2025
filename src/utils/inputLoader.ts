/**
 * Charge le fichier input.txt pour un jour donné
 * Note: Cette fonction nécessite que les fichiers input.txt soient importés dynamiquement
 */
export async function loadInput(dayNumber: number): Promise<string> {
  try {
    const dayStr = String(dayNumber).padStart(2, '0')
    // Utilisation de l'import dynamique avec ?raw pour charger le fichier texte
    const module = await import(`../days/day${dayStr}/input.txt?raw`)
    return module.default
  } catch (error) {
    console.error(`Erreur lors du chargement de l'input pour le jour ${dayNumber}:`, error)
    throw new Error(`Impossible de charger l'input pour le jour ${dayNumber}. Assurez-vous que le fichier src/days/day${String(dayNumber).padStart(2, '0')}/input.txt existe.`)
  }
}

