<template>
  <div class="container">
    <Article :article="article" />
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

  computed: {
    article() {
      return this.store.find(a => a.id == this.$route.params.id)
    },
  },
}
</script>
