import { defineStore } from 'pinia'

export const usePostStore = defineStore('posts', {
  state: () => ({
    posts: [] as any[],
    lastFetched: null as number | null,
  }),
  actions: {
    async fetchPosts() {
      const now = Date.now()
      if (this.posts.length && this.lastFetched && now - this.lastFetched < 15 * 60 * 1000) return

      const { data } = await useFetch('https://jsonplaceholder.typicode.com/posts')
      this.posts = Array.isArray(data.value) ? data.value : []
      this.lastFetched = now
    },
    getPostById(id: string | number) {
      return this.posts.find(post => post.id === Number(id))
    }
  }
})
