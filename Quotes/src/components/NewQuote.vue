<template>
  <div class="row py-5">
    <div class="col-md-8 mx-auto">
      <form>
        <div class="form-group">
          <label for="newQuote">Add a new quote:</label>
          <textarea v-model="quote" class="form-control" id="newQuote" rows="3"></textarea>
        </div>
        <button @click.prevent="addNewQuote" type="submit" class="btn btn-primary">Add quote</button>
      </form>
    </div>
  </div>
</template>

<script>
import { quoteBus } from "../main.js";

export default {
  props: ["quoteCount", "maxQuotes"],
  data: function() {
    return {
      quote: ""
    };
  },
  methods: {
    addNewQuote() {
      if (this.quote === "") return;
      if (this.quoteCount >= this.maxQuotes) {
        return alert("Please delete quotes first.");
      } else {
        quoteBus.$emit("quoteWasAdded", this.quote);
        this.quote = "";
      }
    }
  }
};
</script>

<style scoped>
.btn {
  display: inline-block;
  margin: 0 auto;
}

textarea {
  font: inherit;
  font-family: "Pacifico", cursive;
  font-size: 24px;
}
</style>
