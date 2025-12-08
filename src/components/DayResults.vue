<script setup lang="ts">
import type { DayResult } from "../types";

defineProps<{
  result: DayResult;
}>();

const emit = defineEmits<{
  (e: "run"): void;
}>();

function runAgain() {
  emit("run");
}
</script>

<template>
  <div class="results">
    <div class="actions">
      <button type="button" class="run-btn" @click="runAgain">Relancer la solution</button>
    </div>
    <div class="result-card">
      <h3>Partie 1</h3>
      <div class="result-value">{{ result.part1Result }}</div>
    </div>
    <div class="result-card">
      <h3>Partie 2</h3>
      <div class="result-value">{{ result.part2Result }}</div>
    </div>
    <div class="execution-time">Temps d'exécution: {{ result.executionTime.toFixed(2) }} ms</div>
  </div>
</template>

<style scoped>
.results {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.actions {
  grid-column: 1 / -1;
}

.run-btn {
  background: #667eea;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.65rem 1.1rem;
  cursor: pointer;
  font-weight: 600;
  box-shadow: 0 2px 6px rgba(102, 126, 234, 0.35);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.run-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 10px rgba(102, 126, 234, 0.45);
}

.run-btn:active {
  transform: translateY(0);
  box-shadow: 0 2px 6px rgba(102, 126, 234, 0.35);
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
</style>
