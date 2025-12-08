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

- `src/days/` - Inputs et documentation pour chaque jour (day01/, day02/, etc.)

  - `input.txt` - Fichier d'input principal pour le jour
  - `test.txt` (optionnel) - Fichier d'input de test pour le jour
  - `README.md` - Description du problème
  - `DayXXView.vue` - Le composant contenant le code pour tourner le jour XX

- `src/utils/` - Utilitaires (lecture de fichiers, gestion de la liste des jours disponibles)
- `src/types/` - Types TypeScript

## Ajouter un nouveau jour

1. Créer un dossier `src/days/dayXX/` (XX = numéro du jour avec zéro devant) avec :
   - `input.txt` (obligatoire)
   - `test.txt` (optionnel)
   - `README.md` (description du puzzle)
2. Créer `src/views/days/DayXXView.vue` en copiant une vue existante et en implémentant directement vos fonctions `solvePart1` et `solvePart2` dans le `<script setup>`.
3. Ajouter la route correspondante dans `src/router/index.ts` (`/day/XX`).
4. Ajouter le numéro du jour dans `src/utils/dayRegistry.ts` pour qu'il apparaisse sur la page d'accueil.

## Build

```bash
npm run build
```
