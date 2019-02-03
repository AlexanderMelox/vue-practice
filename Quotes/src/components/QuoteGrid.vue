<template>
  <div class="row">
    <Quote v-for="(quote, index) in quotes" :key="quote + index" @click.native="deleteQuote(index)">
      <p>{{quote}}</p>
    </Quote>
  </div>
</template>

<script>
import Quote from "./Quote.vue";

export default {
  props: {
    quotes: Array
  },
  components: {
    Quote
  },
  methods: {
    deleteQuote(index) {
      this.$emit("quoteDeleted", index);
    }
  }
};
</script>

<style>
</style>