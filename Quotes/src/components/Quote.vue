<template>
  <div class="col-sm-6 col-md-4 col-lg-3">
    <div class="card mb-3">
      <div class="card-body quote">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  border: none;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  transition: all 0.2s;
}

.card:hover {
  transform: scale(1.1) rotate(2deg);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
  z-index: 3000;
}

.quote {
  font-family: "Pacifico", cursive;
  font-size: 24px;
  color: #444;
  cursor: pointer;
}

.quote:hover {
  background-color: #ffe2e2;
}
</style>