<template>
  <div class="container">
    <form v-if="!isSubmitted">
      <div class="row py-3">
        <div class="col-md-6 mx-auto">
          <h1>Sign up</h1>
          <div class="form-group">
            <label for="firstName">First name:</label>
            <input
              type="text"
              class="form-control"
              id="firstName"
              placeholder="First name"
              v-model.trim="userData.firstName"
            >
          </div>
          <div class="form-group">
            <label for="lastName">Last name:</label>
            <input
              type="text"
              class="form-control"
              id="lastName"
              placeholder="Last name"
              v-model.trim="userData.lastName"
            >
          </div>
          <FullName v-model="fullName"/>
          <div class="form-group">
            <label for="email">Email address:</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Email address"
              v-model.trim="userData.email"
            >
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Your secret password"
              v-model.trim="userData.password"
            >
          </div>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="storeData" v-model="storeData">
            <label class="form-check-label" for="storeData">Store data?</label>
          </div>
          <div class="form-group">
            <button @click.prevent="submitted" type="submit" class="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </form>
    <hr>
    <div class="row" v-if="isSubmitted">
      <div class="col-md-6 mx-auto">
        <div class="card">
          <div class="card-header">
            <h4>Your Data</h4>
          </div>
          <div class="card-body">
            <p>Full Name: {{ firstName }}</p>
            <p>Mail: {{ userData.email }}</p>
            <p>Password {{ userData.password }}:</p>
            <p>Store in Database?: {{ storeData }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FullName from "./FullName.vue";

export default {
  data() {
    return {
      userData: {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      },
      storeData: false,
      isSubmitted: false
    };
  },
  computed: {
    fullName() {
      return `${this.userData.firstName} ${this.userData.lastName}`;
    }
  },
  methods: {
    submitted() {
      this.isSubmitted = true;
    }
  },
  components: {
    FullName
  }
};
</script>

<style>
</style>
