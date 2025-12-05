/**
 * Registre des jours disponibles
 * Ajoutez ici les imports des solutions pour chaque jour
 */

import day01Solution from '../days/day01/solution'

// Ajoutez d'autres jours au fur et à mesure
const solutions: Record<number, any> = {
  1: day01Solution,
  // Ajoutez ici : 2: day02Solution, etc.
}

export function getSolution(dayNumber: number) {
  const solution = solutions[dayNumber]
  if (!solution) {
    throw new Error(`Solution pour le jour ${dayNumber} non trouvée`)
  }
  return solution
}

export function getAvailableDays(): number[] {
  return Object.keys(solutions).map(Number).sort((a, b) => a - b)
}

