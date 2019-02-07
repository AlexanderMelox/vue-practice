<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-8 col-md-6 mx-auto">
        <h1>Filters &amp; Mixins</h1>
        <p>{{ text | toUpperCase | to-lowercase }}</p>
        <hr>
        <button @click="fruits.push('Berries')">Add New Item</button>
        <input type="text" v-model="filterText">
        <ul>
          <li v-for="(fruit, index) in filteredFruits" :key="fruit + index">{{ fruit }}</li>
        </ul>
        <hr>
        <List/>
      </div>
    </div>
  </div>
</template>

<script>
import List from './List.vue';
import { fruitMixin } from './fruitMixin.js';

export default {
  data() {
    return {
      text: 'Hello, there.'
    };
  },
  filters: {
    toUpperCase(value) {
      return value.toUpperCase();
    }
  },
  mixins: [fruitMixin],
  components: {
    List
  }
};
</script>

<style>
</style>
