<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
<Suspense>
  <template #default>
    <!-- Data -->
     <RouterView/>
  </template>
  <template #fallback>
  
  </template >
</Suspense>
</template>

<style scoped>
body{
  background-color: black;
}
</style>
