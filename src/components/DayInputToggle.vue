<script setup lang="ts">
import type { InputVariant } from '../utils/inputLoader'

const props = defineProps<{
  modelValue: InputVariant
  options: Array<{ value: InputVariant; label: string }>
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: InputVariant): void
}>()

function updateValue(value: InputVariant) {
  if (value === props.modelValue) return
  emit('update:modelValue', value)
}
</script>

<template>
  <div class="input-toggle">
    <span>Source de données :</span>
    <button
      v-for="option in options"
      :key="option.value"
      :class="['toggle-btn', { active: modelValue === option.value }]"
      type="button"
      @click="updateValue(option.value)"
    >
      {{ option.label }}
    </button>
  </div>
</template>

<style scoped>
.input-toggle {
  display: flex;
  gap: 0.75rem;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.toggle-btn {
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  padding: 0.5rem 0.9rem;
  background: white;
  cursor: pointer;
  transition: all 0.15s ease;
}

.toggle-btn:hover {
  border-color: #667eea;
  color: #667eea;
}

.toggle-btn.active {
  background: #667eea;
  color: white;
  border-color: #667eea;
  box-shadow: 0 2px 6px rgba(102, 126, 234, 0.35);
}
</style>
