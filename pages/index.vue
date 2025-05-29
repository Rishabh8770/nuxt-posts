<template>
  <div class="flex flex-col items-center p-6">
    <h1 class="text-2xl font-bold mb-4">All Posts</h1>
    <div class="flex flex-wrap justify-center gap-4">
      <NuxtLink
        v-for="post in postStore.posts"
        :key="post.id"
        :to="`/posts/${post.id}`"
        class="w-1/4 flex"
      >
        <PostCard :post="post" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import PostCard from '@/components/PostCard.vue'
import { usePostStore } from '@/stores/posts'

const postStore = usePostStore()
await postStore.fetchPosts()
</script>
