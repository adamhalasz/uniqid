

<template>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="state.count++">
    count is: {{ state.count }}
  </button>

  <ul>
    <li v-for="item in state.uniqidList" :key="item">
      {{ item }}
    </li>
  </ul>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script setup>
import { defineProps, reactive } from 'vue'
import uniqid from 'uniqid';
var uniqidList = [];

for(var i = 0; i < 1000; i++){
    uniqidList.push(uniqid());
}

defineProps({
  msg: String
})

const state = reactive({ count: 0, uniqidList: uniqidList })
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
