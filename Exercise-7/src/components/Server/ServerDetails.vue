<template>
  <div class="col-xs-12 col-sm-6">
    <template v-if="Object.keys(server).length === 0">
      <p>Server Details are currently not updated</p>
    </template>
    <template v-else>
      <p>Server ID: {{ server.id }}</p>
      <p>Server Status: {{ server.status }}</p>
      <button @click="changeServerStatus">Change status</button>
    </template>
  </div>
</template>

<script>
import { eventBus } from "../../main.js";

export default {
  data: function() {
    return {
      server: {}
    };
  },
  methods: {
    changeServerStatus() {
      eventBus.$emit("statusWasUpdated", {
        id: this.server.id,
        status: "Normal"
      });
    }
  },
  created() {
    eventBus.$on("serverWasClicked", server => (this.server = server));
  }
};
</script>

<style>
</style>
