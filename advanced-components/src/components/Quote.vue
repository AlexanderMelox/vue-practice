<template>
  <div>
    <div class="title">
      <slot name="title"></slot>
      <span style="color: gray">
        <slot name="subtitle">The subtitle</slot>
      </span>
    </div>
    <hr>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  border: 1px solid #ccc;
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
  padding: 30px;
  margin: 30px auto;
  text-align: center;
}

.title {
  font-style: italic;
}
</style>