<script setup>
const Props= defineProps(['array','user']);
// defineProps(['array'])
</script>

<template>

  <div>
    <h1>Login</h1>
    {{ Props.array}}-<span>{{ user }}</span>
  </div>
</template>

<style scoped></style>
