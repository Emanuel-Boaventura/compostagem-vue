<script setup lang="ts">
import { ref } from 'vue'

const search = ref('')
</script>

<template>
  <main class="container">
    <div class="header">
      <h1>DESCARTE CORRETO!</h1>
      <p>Tem duvida sobre como descartar um resíduo orgânico?</p>
      <p>Pesquise ele na lista abaixo e descubra!</p>
    </div>

    <input type="text" v-model="search" placeholder="casca de banana..." />
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
  color: #819d88;
  opacity: 0.5;
}
</style>
