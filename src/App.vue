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
    Loading...
  </template >
</Suspense>
</template>

<style scoped>
</style>
