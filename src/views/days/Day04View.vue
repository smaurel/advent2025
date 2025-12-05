<script setup lang="ts">
import { ref, watch } from 'vue'
import DayLayout from '../../components/DayLayout.vue'
import DayInputToggle from '../../components/DayInputToggle.vue'
import DayResults from '../../components/DayResults.vue'
import { getSolution } from '../../utils/dayRegistry'
import { loadInput, type InputVariant } from '../../utils/inputLoader'
import type { DayResult } from '../../types'
import { parseLines } from '../../utils/inputParsers'

const dayNumber = 4

const loading = ref(true)
const error = ref<string | null>(null)
const result = ref<DayResult | null>(null)
const inputPreview = ref<string>('')
const inputVariant = ref<InputVariant>('main')

const inputOptions: Array<{ value: InputVariant; label: string }> = [
  { value: 'main', label: 'Input officiel' },
  { value: 'test', label: 'Input de test' }
]

async function loadAndSolve() {
  loading.value = true
  error.value = null
  result.value = null

  try {
    const solution = getSolution(dayNumber)
    const rawInput = await loadInput(dayNumber, inputVariant.value)
    const previewLines = parseLines(rawInput, { allowEmpty: true })
    inputPreview.value = previewLines.slice(0, 20).join('\n') + (previewLines.length > 20 ? '\n...' : '')

    const start = performance.now()
    const trimmedInput = rawInput.trim()
    const part1Result = solution.part1(trimmedInput)
    const part2Result = solution.part2(trimmedInput)
    const executionTime = performance.now() - start

    result.value = {
      dayNumber,
      part1Result,
      part2Result,
      executionTime
    }
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Erreur inconnue'
    console.error(err)
  } finally {
    loading.value = false
  }
}

watch(
  () => inputVariant.value,
  () => {
    loadAndSolve()
  },
  { immediate: true }
)
</script>

<template>
  <DayLayout :day-number="dayNumber">
    <DayInputToggle v-model="inputVariant" :options="inputOptions" />

    <div v-if="loading" class="loading">Chargement...</div>

    <div v-else-if="error" class="error">
      <p>{{ error }}</p>
    </div>

    <div v-else-if="result">
      <DayResults :result="result" />
      <div class="input-preview">
        <h3>Input (preview)</h3>
        <pre>{{ inputPreview }}</pre>
      </div>
    </div>
  </DayLayout>
</template>

<style scoped>
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
