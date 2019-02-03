<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="selectedComponent = 'Quote'">Quote</button>
        <button @click="selectedComponent = 'Author'">Author</button>
        <button @click="selectedComponent = 'New'">New</button>
        <hr>
        <p>{{ selectedComponent}}</p>
        <!-- <Quote>
          <h2 slot="title">{{ quoteTitle }}</h2>
          <span slot="subtitle">So wonderful</span>
          <p>My wonderful quote!</p>
        </Quote>-->
        <keep-alive>
          <component :is="selectedComponent">
            <p>Default content</p>
          </component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import Quote from "./components/Quote";
import Author from "./components/Author";
import New from "./components/New";

export default {
  data: function() {
    return {
      quoteTitle: "The Quote",
      selectedComponent: "Quote"
    };
  },
  components: {
    Quote,
    Author,
    New
  }
};
</script>

<style scoped>
</style>
