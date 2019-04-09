<template>
  <div id="new-project">
    <h3>New Project</h3>
    <div class="row">
      <form @submit.prevent="saveProject" class="col s12">
        <div class="row">
          <div class="input-field col s 12">
            <input type="text" v-model="project_id" required>
            <label>Project ID#</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s 12">
            <input type="text" v-model="project_name" required>
            <label>Project Name</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s 12">
            <input type="date" class='datepicker' v-model="consult_date" required>
            <label>Consult Date</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s 12">
            <input type="date" class='datepicker' v-model="shoot_date" required>
            <label>Shoot Date</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s 12">
            <input type="text" v-model="shoot_type" required>
            <label>Shoot Type</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s 12">
            <input type="text" v-model="shoot_location" required>
            <label>Shoot Location</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s 12">
            <input type="text" v-model="invoice_cost" required>
            <label>Invoice Cost</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s 12">
            <input type="text" v-model="dept_cost" required>
            <label>Deposit Cost</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s 12">
            <input type="text" v-model="dept_status" required>
            <label>Deposit Status</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s 12">
            <input type="text" v-model="invoice_status" required>
            <label>Invoice Status</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s 12">
            <input type="text" v-model="notes">
            <label>Notes</label>
          </div>
        </div>

        <button type="submit" class="btn">Submit</button>
        <router-link to="/projects" class="btn grey">Cancel</router-link>
      </form>
    </div>
  </div>
</template>


<script>
import db from "./firebaseInit.js";
export default {
  name: "new-project",
  data() {
    return {
      project_id: null,
      consult_date: null,
      shoot_date: null,
      shoot_type: null,
      shoot_location: null,
      invoice_cost: null,
      dept_cost: null,
      dept_status: null,
      invoice_status: null,
      notes: null,
      project_name: null
    };
  },
  methods: {
    saveProject() {
      db.collection("projects")
        .add({
          project_id: this.project_id,
          consult_date: this.consult_date,
          shoot_date: this.shoot_date,
          shoot_type: this.shoot_type,
          shoot_location: this.shoot_location,
          invoice_cost: this.invoice_cost,
          dept_cost: this.dept_cost,
          dept_status: this.dept_status,
          invoice_status: this.invoice_status,
          notes: this.notes,
          project_name: this.project_name
        })
        .then(docRef => this.$router.push("/projects"))
        .catch(error => console.log(err));
    }
  }
};
</script>