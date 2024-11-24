<script lang="ts" setup>
import type { IItem } from '@/views/WastesView.vue'
import { ref } from 'vue'

const { data } = defineProps<{ data: IItem }>()

const open = ref(false)

function toggleCard() {
  open.value = !open.value
}
</script>

<template>
  <li @click="toggleCard" :class="{ open }">
    <h2>{{ data.name }}</h2>

    <div class="content">
      <h3>Parte reutilizável:</h3>
      <p>{{ data.recyclable }}</p>

      <h3>Por que?</h3>
      <p>{{ data.why }}</p>

      <h3>Como fazer?</h3>
      <h4>Com composteira:</h4>
      <p>{{ data.composter }}</p>
      <h4>Adubo direto:</h4>
      <p>{{ data.fertilizer }}</p>

      <h3>Quer apenas descartar?</h3>
      <p>{{ data.discard }}</p>
    </div>
  </li>
</template>

<style scoped>
li {
  padding: 10px 20px;
  border-radius: 8px;
  transition:
    background 0.1s,
    max-height 0.3s ease-out;

  max-height: 48px;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

h2 {
  font-size: 20px;
  transition: font-size 0.3s;
}

h3 {
  font-size: 24px;
}

h4 {
  font-size: 20px;
}

p {
  margin-bottom: 16px;
}
p:last-of-type {
  margin-bottom: 0px;
}

li:hover:not(.open) {
  background-color: #424242;
}

.open {
  height: 100%;
  max-height: 900px;
  background-color: #1f3626;
  transition: max-height 0.3s ease-in;
}

.open h2 {
  font-size: 28px;
}
</style>
