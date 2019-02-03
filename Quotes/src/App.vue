<template>
  <div class="container">
    <Header :quoteCount="quotes.length" :maxQuotes="maxQuotes"/>
    <NewQuote :quoteCount="quotes.length" :maxQuotes="maxQuotes"/>
    <QuoteGrid :quotes="quotes" @quoteDeleted="deleteQuote"/>
    <div class="row">
      <div class="col-12 text-center alert alert-info">Info: click on a quote to delete it</div>
    </div>
  </div>
</template>

<script>
import QuoteGrid from "./components/QuoteGrid.vue";
import NewQuote from "./components/NewQuote.vue";
import Header from "./components/Header.vue";
import { quoteBus } from "./main.js";

export default {
  data: function() {
    return {
      maxQuotes: 10,
      quotes: ["Just a Quote to see something"]
    };
  },
  methods: {
    deleteQuote(index) {
      this.quotes.splice(index, 1);
    }
  },
  components: {
    QuoteGrid,
    NewQuote,
    Header
  },
  created() {
    quoteBus.$on("quoteWasAdded", quote => this.quotes.push(quote));
  }
};
</script>

<style>
</style>
