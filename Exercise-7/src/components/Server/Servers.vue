<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <Server v-for="server in servers" :key="server.id" :server="server"/>
    </ul>
  </div>
</template>

<script>
import Server from "./Server.vue";
import { eventBus } from "../../main";

export default {
  data: function() {
    return {
      servers: [
        { id: 1, status: "Normal" },
        { id: 2, status: "Critical" },
        { id: 3, status: "Unknown" },
        { id: 4, status: "Normal" },
        { id: 5, status: "Critical" }
      ]
    };
  },
  components: {
    Server
  },
  created() {
    // eventBus.$on("statusWasUpdated", updatedServer => {
    //   this.servers.forEach(server => {
    //     if (updatedServer.id === server.id) {
    //       server.status = updatedServer.status;
    //     }
    //   });
    // });
  }
};
</script>

<style>
</style>
