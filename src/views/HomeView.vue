<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getAvailableDays } from '../utils/dayRegistry'

const availableDays = ref<number[]>([])

function checkAvailableDays() {
  availableDays.value = getAvailableDays()
}

onMounted(() => {
  checkAvailableDays()
})
</script>

<template>
  <div class="home">
    <h2>Jours disponibles</h2>
    <div class="days-grid">
      <router-link
        v-for="day in availableDays"
        :key="day"
        :to="`/day/${day}`"
        class="day-card"
      >
        <h3>Jour {{ day }}</h3>
        <p>Voir la solution</p>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.home {
  padding: 2rem 0;
}

h2 {
  margin-bottom: 2rem;
  color: #333;
}

.days-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
}

.day-card {
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  padding: 1.5rem;
  text-decoration: none;
  color: inherit;
  transition: all 0.2s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.day-card:hover {
  border-color: #667eea;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.day-card h3 {
  margin: 0 0 0.5rem 0;
  color: #667eea;
  font-size: 1.5rem;
}

.day-card p {
  margin: 0;
  color: #666;
  font-size: 0.9rem;
}
</style>
