import type { DaySolution, DayResult } from '../types'
import { loadInput, type InputVariant } from './inputLoader'

/**
 * Exécute les solutions pour un jour donné
 */
export async function runSolution(
  dayNumber: number,
  solution: DaySolution,
  inputVariant: InputVariant = 'main'
): Promise<DayResult> {
  const startTime = performance.now()

  try {
    const input = await loadInput(dayNumber, inputVariant)
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
