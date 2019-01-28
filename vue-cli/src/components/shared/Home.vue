<template>
  <div>
    <app-server-status v-for="server in 5"></app-server-status>
  </div>
</template>

<script>
import ServerStatus from '../Server/ServerStatus.vue';

export default {
  components: {
    'app-server-status': ServerStatus
  }
};
</script>

<style scoped>
div {
  border: 1px solid blue;
}
</style>
