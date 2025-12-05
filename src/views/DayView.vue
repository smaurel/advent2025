<template>
  <div class="day-view">
    <div class="header">
      <router-link to="/" class="back-link">← Retour à l'accueil</router-link>
      <h2>Jour {{ dayNumber }}</h2>
    </div>

    <div v-if="loading" class="loading">
      Chargement...
    </div>

    <div v-else-if="error" class="error">
      <p>{{ error }}</p>
    </div>

    <div v-else-if="result" class="results">
      <div class="result-card">
        <h3>Partie 1</h3>
        <div class="result-value">{{ result.part1Result }}</div>
      </div>
      <div class="result-card">
        <h3>Partie 2</h3>
        <div class="result-value">{{ result.part2Result }}</div>
      </div>
      <div class="execution-time">
        Temps d'exécution: {{ result.executionTime.toFixed(2) }} ms
      </div>
    </div>

    <div v-if="result" class="input-preview">
      <h3>Input (preview)</h3>
      <pre>{{ inputPreview }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { DayResult } from '../types'
import { runSolution } from '../utils/solutionRunner'
import { loadInput } from '../utils/inputLoader'

const props = defineProps<{
  dayNumber: number
}>()

const loading = ref(true)
const error = ref<string | null>(null)
const result = ref<DayResult | null>(null)
const inputPreview = ref<string>('')

async function loadSolution() {
  loading.value = true
  error.value = null

  try {
    // Charger la solution du jour depuis le registre
    const { getSolution } = await import('../utils/dayRegistry')
    const solution = getSolution(props.dayNumber)

    // Charger l'input pour l'aperçu
    const input = await loadInput(props.dayNumber)
    inputPreview.value = input.substring(0, 500) + (input.length > 500 ? '...' : '')

    // Exécuter la solution
    const dayResult = await runSolution(props.dayNumber, solution)
    result.value = dayResult
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Erreur inconnue'
    console.error(err)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  loadSolution()
})
</script>

<style scoped>
.day-view {
  padding: 2rem 0;
}

.header {
  margin-bottom: 2rem;
}

.back-link {
  display: inline-block;
  margin-bottom: 1rem;
  color: #667eea;
  text-decoration: none;
  font-weight: 500;
}

.back-link:hover {
  text-decoration: underline;
}

h2 {
  margin: 0;
  color: #333;
  font-size: 2rem;
}

.loading,
.error {
  padding: 2rem;
  text-align: center;
  background: #f5f5f5;
  border-radius: 8px;
  margin: 2rem 0;
}

.error {
  background: #fee;
  color: #c33;
}

.results {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.result-card {
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.result-card h3 {
  margin: 0 0 1rem 0;
  color: #667eea;
  font-size: 1.2rem;
}

.result-value {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  word-break: break-all;
}

.execution-time {
  grid-column: 1 / -1;
  text-align: center;
  color: #666;
  font-size: 0.9rem;
  padding: 1rem;
  background: #f9f9f9;
  border-radius: 4px;
}

.input-preview {
  margin-top: 2rem;
  background: #f9f9f9;
  border-radius: 8px;
  padding: 1.5rem;
}

.input-preview h3 {
  margin: 0 0 1rem 0;
  color: #333;
}

.input-preview pre {
  background: white;
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
  font-size: 0.9rem;
  line-height: 1.5;
  border: 1px solid #e0e0e0;
}
</style>

