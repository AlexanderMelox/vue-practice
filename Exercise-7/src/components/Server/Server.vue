<template>
  <li @click="serverSelected" class="list-group-item">
    Server #{{ id }}
    <br>
    Status: {{ status }}
  </li>
</template>

<script>
import { eventBus } from "../../main.js";

export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    status: String
  },
  methods: {
    serverSelected() {
      eventBus.$emit("serverWasClicked", { id: this.id, status: this.status });
    }
  }
};
</script>
