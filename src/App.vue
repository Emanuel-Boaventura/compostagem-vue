<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="header">
    <h2>COMPOSTAGEM</h2>

    <nav>
      <RouterLink to="/">RESÍDUOS</RouterLink>
      <div class="line"></div>
      <RouterLink to="/composteira">COMPOSTEIRA</RouterLink>
      <div class="line"></div>
      <RouterLink to="/sobre">SOBRE</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Nunito', sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  color: #d4ded6;
}

html {
  background-color: #232323;
}

a {
  text-decoration: none;
}

.container {
  display: flex;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 32px;

  padding-bottom: 96px;
}

p,
a {
  font-size: 20px;
}

h1 {
  text-align: center;
  width: 100%;
}
</style>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  margin-bottom: 32px;
}

header h2 {
  font-size: 52px;
  color: #d4ded6;
}

nav {
  display: flex;
  gap: 16px;
  margin-top: 16px;
}

.line {
  width: 3px;
  border-radius: 2px;
  background-color: white;
}

header nav a {
  width: 100%;
  font-size: 28px;
  padding: 8px 16px;
  position: relative;
}

.router-link-active::before {
  height: 100%;
  background-color: #326141;
}

header nav a::before {
  content: '';
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
  height: 10%;
  background-color: #597f64;
  opacity: 1;
  transition:
    height 0.1s ease,
    background-color 0.2s ease;
  border-radius: 4px;
  z-index: -1;
}

header nav a:hover::before {
  height: 100%;
}
</style>
