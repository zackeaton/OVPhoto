<template>
  <div id="price-project">
    <h3>Price Project</h3>
    <div class="row">
      <form @submit.prevent="updateProject" class="col s12">

        <div class="row">
          <div class="input-field col s 12">
            <input disabled type="text" v-model="project_id" required>
            <label>Project ID#</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s 12">
            <input type="number" step='.01' v-model="main_hourly" required>
            <label>Main Shooter Hourly Rate</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s 12">
            <input type="number" step='.01' v-model="shoot_hours" required>
            <label>Project Shoot Hours</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s 12">
            <input type="number" step='.01' v-model="edit_hours" required>
            <label>Project Edit Hours</label>
          </div>
        </div>

        

        <button v-on:click='calcTotal' class="btn">Calcuate Totals</button>
        <router-link to="/projects" class="btn grey">Cancel</router-link>
      </form>
    </div>
  </div>
</template>

<script>
import db from "./firebaseInit.js";
export default {
  name: "price-project",
  data() {
    return {
      project_id: null,
      project_name: null,
      invoice_cost: null,
      dept_cost: null,
      dept_status: null,
      project_name: null,
      main_hourly: null,
      shoot_hours: null,
      edit_hours: null,
    };
  },
  methods: {
      calcTotal: function (event) {
          alert('Test');
      }
  }
};