<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mx-auto">
        <h1>Animations</h1>
        <hr>
        <button @click="show = !show" class="btn btn-primary">Show alert</button>
        <br>
        <br>
        <transition name="fade">
          <div v-if="show" class="alert alert-info">This is some info</div>
        </transition>
        <transition name="slide">
          <div v-if="show" class="alert alert-info" type="animation">This is some info</div>
        </transition>
        <transition appear enter-active-class="animated bounce" leave-active-class="animated shake">
          <div v-if="show" class="alert alert-info">This is some info</div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    };
  }
};
</script>

<style>
.container {
  font-family: "Avenir", sans-serif;
  max-width: 600px;
  margin: 0 auto;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1s;
}

.fade-leave {
}

.fade-leave-active {
  opacity: 0;
  transition: opacity 1s;
}

.slide-enter {
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 0.5s;
}

.slide-leave {
}

.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
