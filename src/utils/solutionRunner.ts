import type { DaySolution, DayResult } from '../types'
import { loadInput } from './inputLoader'

/**
 * Exécute les solutions pour un jour donné
 */
export async function runSolution(dayNumber: number, solution: DaySolution): Promise<DayResult> {
  const startTime = performance.now()

  try {
    const input = await loadInput(dayNumber)
    const part1Result = solution.part1(input.trim())
    const part2Result = solution.part2(input.trim())

    const endTime = performance.now()
    const executionTime = endTime - startTime

    return {
      dayNumber,
      part1Result,
      part2Result,
      executionTime
    }
  } catch (error) {
    console.error(`Erreur lors de l'exécution de la solution pour le jour ${dayNumber}:`, error)
    throw error
  }
}

