<template>
  <div
    class="p-6 border rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-gray-100 hover:shadow-xl flex flex-col">
    <h2 class="font-bold text-2xl text-gray-800 mb-2">{{ post.title }}</h2>
    <p class="text-gray-600 text-lg">{{ post.body.slice(0, 120) }}...</p>
  </div>
</template>

<script setup lang="ts">
defineProps(["post"]);
</script>
