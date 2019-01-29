<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <button @click="changeName">Change my name</button>
    <p>Name is {{ name }}</p>
    <p>Age is {{ age }}</p>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <UserDetail :name="name" @nameWasReset="name = $event" :resetFn="resetName" :userAge="age"></UserDetail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <UserEdit :userAge="age" @ageWasEdited="age = $event"></UserEdit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";

export default {
  data() {
    return {
      name: "Alex",
      age: 21
    };
  },
  methods: {
    changeName() {
      this.name = "Max";
    },
    resetName() {
      this.name = "Alex";
    }
  },
  components: {
    UserDetail,
    UserEdit
  }
};
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>
