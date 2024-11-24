<script setup lang="ts">
import ItemNotFound from '@/components/ItemNotFound.vue'
import WasteCard from '@/components/WasteCard.vue'
import mockData from '@/mock/mock.json'
import { computed, ref } from 'vue'

export interface IItem {
  name: string
  recyclable: string
  why: string
  composter: string
  fertilizer: string
  discard: string
}

const search = ref('')

function cleanString(str: string) {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

const filteredItems = computed(() =>
  mockData.items
    .filter((item) => cleanString(item.name).includes(cleanString(search.value)))
    .sort((a, b) => {
      if (a.name < b.name) return -1
      if (a.name > b.name) return 1
      return 0
    }),
)
</script>

<template>
  <main class="container">
    <div class="header">
      <h1>DESCARTE CORRETO!</h1>
      <p>Tem duvida sobre como descartar um resíduo orgânico?</p>
      <p>Pesquise ele na lista abaixo e descubra!</p>
    </div>

    <input type="text" v-model="search" placeholder="café..." />

    <ul>
      <WasteCard v-for="item in filteredItems" :key="item.name" :data="item" />
      <ItemNotFound v-show="filteredItems.length === 0" />
    </ul>
  </main>
</template>

<style scoped>
.container {
  flex-direction: column;
  gap: 32px;
}

.header {
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
}

h1 {
  margin-bottom: 16px;
}

input {
  background: none;
  border: 1px solid #d4ded6;
  border-radius: 8px;
  height: 48px;
  text-align: center;
  color: #d4ded6;
  font-size: 20px;
}

input::placeholder {
  color: #888888;
  opacity: 0.5;
}

ul {
  text-align: center;
  list-style-position: inside;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
