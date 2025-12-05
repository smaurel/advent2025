# Advent of Code 2025

Projet Vue 3 + TypeScript pour résoudre les puzzles de l'Advent of Code 2025.

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

L'application sera accessible sur `http://localhost:5173`

## Structure

- `src/days/` - Solutions organisées par jour (day01/, day02/, etc.)
  - Chaque jour contient :
    - `solution.ts` - Implémentation des solutions partie 1 et 2
    - `input.txt` - Fichier d'input pour le jour
    - `README.md` - Documentation du problème

- `src/views/` - Vues Vue pour afficher les résultats
- `src/utils/` - Utilitaires (lecture de fichiers, exécution de solutions)
- `src/types/` - Types TypeScript

## Ajouter un nouveau jour

1. Créer un nouveau dossier `src/days/dayXX/` (XX = numéro du jour avec zéro devant)
2. Créer `solution.ts` avec la structure suivante :

```typescript
import type { DaySolution } from '../../types'

const solution: DaySolution = {
  dayNumber: XX,
  part1: (input: string) => {
    // Votre solution partie 1
    return 'résultat'
  },
  part2: (input: string) => {
    // Votre solution partie 2
    return 'résultat'
  }
}

export default solution
```

3. Ajouter le fichier `input.txt` avec votre input
4. Enregistrer la solution dans `src/utils/dayRegistry.ts` :
   - Importer la solution : `import dayXXSolution from '../days/dayXX/solution'`
   - L'ajouter au registre : `XX: dayXXSolution,`
5. Le jour apparaîtra automatiquement sur la page d'accueil

## Build

```bash
npm run build
```

