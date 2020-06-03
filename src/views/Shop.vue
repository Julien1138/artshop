<template>
  <div class="container">
    <Article
      v-for="(article, index) in store"
      :key="`article-${index}`"
      :article="article"
    />
  </div>
</template>

<script>
import Article from '@/components/Article'
import store from '@/store/store.js'

export default {
  components: {
    Article,
  },

  data() {
    return {
      store,
    }
  },
}
</script>
