export interface DaySolution {
  dayNumber: number
  part1: (input: string) => string | number
  part2: (input: string) => string | number
}

export interface DayResult {
  dayNumber: number
  part1Result: string | number
  part2Result: string | number
  executionTime: number
}

