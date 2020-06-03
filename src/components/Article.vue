<template>
  <div class="article">
    <div class="article-left">
      <router-link :to="routeToArticle">
        <img class="article-image" :src="`/pictures/${article.image_src}`" />
      </router-link>
    </div>
    <div class="article-right">
      <div class="article-header">
        <router-link :to="routeToArticle">
          <h2>{{ article.title }}</h2>
        </router-link>
      </div>
      <div class="article-content">
        <p>{{ article.description }}</p>
      </div>
      <div class="article-footer">
        <div>
          <p>
            Price: <strong>{{ priceInLocalCurrency }}</strong>
          </p>
        </div>
        <Rating :rating="article.rating" />
        <div>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Rating from './Rating'

export default {
  components: {
    Rating,
  },

  props: {
    article: {
      type: Object,
      default: null,
    },
  },

  computed: {
    priceInLocalCurrency() {
      return this.article.price.toLocaleString('fr-FR', {
        style: 'currency',
        currency: 'EUR',
      })
    },

    routeToArticle() {
      return {
        name: 'Details',
        params: {
          id: this.article.id,
        },
      }
    },
  },
}
</script>

<style>
.article {
  box-shadow: 10px 5px 5px black;
  margin: 10px;
  overflow: auto;
}
.article-left {
  float: left;
}
.article-image {
  display: block;
  width: 450px;
}

.article-right {
  position: relative;
  top: 0px;
  height: 100%;
  margin-left: 450px;
  overflow: hidden;
}
.article-header {
  margin: 1rem;
}
.article-content {
  text-align: justify;
  margin: 1rem;
}
.article-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: start;
  margin: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>
