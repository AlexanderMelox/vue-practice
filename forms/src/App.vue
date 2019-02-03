<template>
  <div class="container pt-5">
    <div class="row">
      <div class="col-md-6 mx-auto">
        <h1 class="display-5">File a Complaint</h1>
        <hr>
        <form>
          <div class="form-group">
            <label for="email">Email address</label>
            <input
              type="email"
              class="form-control"
              id="email"
              aria-describedby="email"
              placeholder="Enter email"
              v-model.trim="userData.email"
            >
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
              v-model.lazy="userData.password"
            >
            <p>{{ userData.password }}</p>
          </div>
          <div class="form-group">
            <label for="age">Age</label>
            <input
              type="number"
              class="form-control"
              id="age"
              placeholder="Age"
              v-model.number="userData.age"
            >
          </div>
          <div class="form-group">
            <label for="message">Example textarea</label>
            <textarea class="form-control" id="message" rows="3" v-model="message"></textarea>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="sendMail"
              value="sendMail"
              v-model="sendMail"
            >
            <label class="form-check-label" for="sendMail">Send Mail</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="sendInfoMail"
              value="sendInfoMail"
              v-model="sendMail"
            >
            <label class="form-check-label" for="sendInfoMail">Send Info Mail</label>
          </div>
          <div class="form-check pt-3">
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              id="male"
              value="Male"
              v-model="gender"
            >
            <label class="form-check-label" for="male">Male</label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              id="female"
              value="Female"
              v-model="gender"
            >
            <label class="form-check-label" for="female">Female</label>
          </div>
          <div class="form-group pt-3">
            <label for="priority">Priority</label>
            <select class="form-control" id="priority" v-model="selectedPriority">
              <option v-for="priority in priorities">{{ priority }}</option>
            </select>
          </div>
          <div class="row mb-3">
            <div class="col">
              <app-switch v-model="dataSwitch"></app-switch>
            </div>
          </div>
          <button type="submit" class="btn btn-primary" @click.prevent="submitted">Submit</button>
        </form>
      </div>
    </div>
    <div v-if="isSubmitted" class="row pt-5">
      <div class="col-md-6 mx-auto">
        <div class="card">
          <div class="card-header">Your data:</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Email: {{ userData.email }}</li>
            <li class="list-group-item">Password: {{ userData.password }}</li>
            <li class="list-group-item">Age: {{ userData.age }}</li>
            <li class="list-group-item" style="white-space: pre">Message:{{ message }}</li>
            <li class="list-group-item">
              <strong>Send mail?</strong>
              <ul>
                <li v-for="(item, i) in sendMail" :key="item + i">{{ item }}</li>
              </ul>
            </li>
            <li class="list-group-item">Gender: {{ gender }}</li>
            <li class="list-group-item">Priority: {{ selectedPriority }}</li>
            <li class="list-group-item">Switched: {{ dataSwitch }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Switch from "./Switch.vue";

export default {
  name: "App",
  data() {
    return {
      userData: {
        email: "",
        password: "",
        age: 27
      },
      message: "",
      sendMail: [],
      gender: "Male",
      selectedPriority: "High",
      priorities: ["High", "Medium", "Low"],
      dataSwitch: true,
      isSubmitted: false
    };
  },
  methods: {
    submitted() {
      this.isSubmitted = true;
    }
  },
  components: {
    appSwitch: Switch
  }
};
</script>

<style>
</style>
