<template>
	<div class="p-6">
		<NuxtLink to="/posts" class="text-blue-600 flex items-center gap-2 mb-4">
			<font-awesome-icon icon="fa-solid fa-arrow-left" />
			Back to Posts
		</NuxtLink>
		<div class="flex flex-col items-center">
			<h1 class="text-2xl font-bold mb-2">{{ post?.title }}</h1>
			<p class="text-gray-600">{{ post?.body }}</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { usePostStore } from '@/stores/posts'

const route = useRoute()
const postStore = usePostStore()
await postStore.fetchPosts()

const post = postStore.getPostById(route.params.id as string)
</script>
