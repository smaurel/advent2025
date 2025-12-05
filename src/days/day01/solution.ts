import type { DaySolution } from "../../types";

/**
 * Solution pour le jour 1 de l'Advent of Code 2025
 *
 * Remplacez cette implémentation par votre solution réelle
 */
const solution: DaySolution = {
  dayNumber: 1,

  part1: (input: string): string | number => {
    // Exemple: compter le nombre de lignes
    const lines = input.split("\n").filter((line) => line.trim() !== "");
    return lines.length;
  },

  part2: (input: string): string | number => {
    // Exemple: compter le nombre total de caractères
    return input.length;
  },
};

export default solution;
