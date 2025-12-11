<script setup lang="ts">
import type { Result } from "../types";

defineProps<{
  results: [Result, Result];
}>();

const emit = defineEmits<{
  (e: "run", part: 1 | 2): void;
}>();

function runPart(part: 1 | 2) {
  emit("run", part);
}
</script>

<template>
  <div class="results">
    <div class="result-card" v-for="{ result, part, executionTime } in results" :key="part">
      <div class="result-header">
        <h3>Partie {{ part }}</h3>
        <button type="button" class="run-btn-small" @click="runPart(part)" title="Relancer la partie {{ part }}">
          ▶
        </button>
      </div>
      <div class="result-value">{{ result }}</div>
      <div class="execution-time-small">Temps: {{ executionTime.toFixed(2) }} ms</div>
    </div>
  </div>
</template>

<style scoped>
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

.result-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.result-card h3 {
  margin: 0;
  color: #667eea;
  font-size: 1.2rem;
}

.run-btn-small {
  background: #667eea;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.4rem 0.6rem;
  cursor: pointer;
  font-size: 0.9rem;
  box-shadow: 0 2px 4px rgba(102, 126, 234, 0.3);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  line-height: 1;
}

.run-btn-small:hover {
  transform: translateY(-1px);
  box-shadow: 0 3px 6px rgba(102, 126, 234, 0.4);
}

.run-btn-small:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(102, 126, 234, 0.3);
}

.result-value {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  word-break: break-all;
}

.execution-time-small {
  margin-top: 0.5rem;
  color: #666;
  font-size: 0.85rem;
}
</style>
