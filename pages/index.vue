<template>
  <div class="flex flex-col items-center justify-center h-screen text-center px-4">
    <h1 class="text-4xl font-bold mb-6">Welcome to Nuxt Posts App</h1>
    <p class="text-lg text-gray-600 mb-8">Click the button below to view all posts</p>
    <NuxtLink
      to="/posts"
      class="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
    >
      View Posts
    </NuxtLink>
  </div>
</template>
