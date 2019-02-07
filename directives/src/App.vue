<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-md-6 mx-auto">
        <h1>Built-in Directives</h1>
        <p v-text="'The v-text directive'"></p>
        <p v-html="'<strong>The v-html directive</strong>'"></p>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-md-6 mx-auto">
        <h1>Custom Directives</h1>
        <p v-highlight:background.delayed="'red'">Color this</p>
        <p
          v-local-highlight:background.delayed.blink="{ mainColor: 'red', secondColor: 'green', delay: 500 }"
        >Color this too</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  directives: {
    "local-highlight": {
      bind(el, binding, vnode) {
        let delay = 0;
        if (binding.modifiers["delayed"]) {
          delay = 3000;
        }
        if (binding.modifiers["blink"]) {
          let mainColor = binding.value.mainColor;
          let secondColor = binding.value.secondColor;
          let currentColor = mainColor;
          setTimeout(() => {
            setInterval(function() {
              currentColor === secondColor
                ? (currentColor = mainColor)
                : (currentColor = secondColor);
              if (binding.arg === "background") {
                el.style.backgroundColor = currentColor;
              } else {
                el.style.color = currentColor;
              }
            }, 1000);
          }, binding.value.delay);
        } else {
          setTimeout(() => {
            if (binding.arg === "background") {
              el.style.backgroundColor = binding.value.mainColor;
            } else {
              el.style.color = binding.value.mainColor;
            }
          }, delay);
        }
      }
    }
  }
};
</script>

<style>
.container {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
