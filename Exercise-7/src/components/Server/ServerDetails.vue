<template>
  <div class="col-xs-12 col-sm-6">
    <template v-if="!server">
      <p>Please select a server</p>
    </template>
    <template v-else>
      <p>Server#: {{ server.id }}</p>
      <p>Server Status: {{ server.status }}</p>
      <hr>
      <button class="btn btn-primary" @click="changeServerStatus">Change status</button>
    </template>
  </div>
</template>

<script>
import { eventBus } from "../../main.js";

export default {
  data: function() {
    return {
      server: null
    };
  },
  methods: {
    changeServerStatus() {
      this.server.status = "Normal";
    }
  },
  created() {
    eventBus.$on("serverWasClicked", server => (this.server = server));
  }
};
</script>

<style>
</style>
