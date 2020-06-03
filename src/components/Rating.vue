<template>
  <div class="rating-container">
    <img
      v-for="(stars, index) in filledStars"
      :key="`full-star-${index}`"
      src="@/assets/star.svg"
      height="20"
    />
    <img
      v-for="(stars, index) in emptyStars"
      :key="`empty-star-${index}`"
      src="@/assets/star-empty.svg"
      height="20"
    />
  </div>
</template>

<script>
export default {
  props: {
    rating: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    filledStars() {
      return Math.round(this.rating)
    },

    emptyStars() {
      return 5 - this.filledStars
    },
  },
}
</script>

<style></style>
