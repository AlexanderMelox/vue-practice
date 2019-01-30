<template>
  <li @click="serverSelected" class="list-group-item">
    Server #{{ server.id }}
    <br>
    Status: {{ server.status }}
  </li>
</template>

<script>
import { eventBus } from "../../main.js";

export default {
  props: {
    server: {
      type: Object,
      required: true
    }
  },
  methods: {
    serverSelected() {
      eventBus.$emit("serverWasClicked", this.server);
    }
  }
};
</script>
