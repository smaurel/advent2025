/**
 * Utilitaires de parsing d'input
 */

export function parseLines(
  input: string,
  options: { trim?: boolean; allowEmpty?: boolean } = {}
): string[] {
  const { trim = true, allowEmpty = false } = options
  return input
    .split('\n')
    .map((line) => (trim ? line.trim() : line))
    .filter((line) => allowEmpty || line.length > 0)
}

export function parseParagraphs(input: string): string[] {
  return input
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter((block) => block.length > 0)
}
