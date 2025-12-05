<script setup lang="ts">
defineProps<{
  dayNumber: number
}>()
</script>

<template>
  <div class="day-view">
    <div class="header">
      <router-link to="/" class="back-link">← Retour à l'accueil</router-link>
      <h2>Jour {{ dayNumber }}</h2>
    </div>
    <slot />
  </div>
</template>

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
</style>
