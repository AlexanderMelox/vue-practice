<template>
  <div class="form-group">
    <label for="fullName">Full name:</label>
    <input
      type="text"
      class="form-control"
      id="fullName"
      placeholder="Full name"
      :value="value"
      @input="onChange"
      disabled
    >
  </div>
</template>

<script>
export default {
  props: ["value"],
  methods: {
    onChange() {
      this.$emit("input", this.value);
    }
  }
};
</script>

