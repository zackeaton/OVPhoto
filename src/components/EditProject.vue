<template>
  <div id="edit-project">
    <h3>Edit Project</h3>
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
            <input type="text" v-model="project_name" required>
            <label>Project Name</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s 12">
            <input type="date" v-model="consult_date" class='datepicker' required>
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
  name: "edit-project",
  data() {
    return {
      project_id: null,
      project_name: null,
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
  beforeRouteEnter(to, from, next) {
    db.collection("projects")
      .where("project_id", "==", to.params.project_id)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          next(vm => {
            vm.project_id = doc.data().project_id;
            vm.project_name = doc.data().project_name;
            vm.consult_date = doc.data().consult_date;
            vm.shoot_date = doc.data().shoot_date;
            vm.shoot_type = doc.data().shoot_type;
            vm.shoot_location = doc.data().shoot_location;
            vm.invoice_cost = doc.data().invoice_cost;
            vm.dept_cost = doc.data().dept_cost;
            vm.dept_status = doc.data().dept_status;
            vm.invoice_status = doc.data().invoice_status;
            vm.notes = doc.data().notes;
            vm.project_name = doc.data().project_name;
          });
        });
      });
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      db.collection("projects")
        .where("project_id", "==", this.$route.params.project_id)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.project_id = doc.data().project_id;
            this.project_name = doc.data().project_name;
            this.consult_date = doc.data().consult_date;
            this.shoot_date = doc.data().shoot_date;
            this.shoot_type = doc.data().shoot_type;
            this.shoot_location = doc.data().shoot_location;
            this.invoice_cost = doc.data().invoice_cost;
            this.dept_cost = doc.data().dept_cost;
            this.dept_status = doc.data().dept_status;
            this.invoice_status = doc.data().invoice_status;
            this.notes = doc.data().notes;
            this.project_name = doc.data().project_name;
          });
        });
    },
    updateProject() {
      db.collection("projects")
        .where("project_id", "==", this.$route.params.project_id)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.ref
              .update({
                project_id: this.project_id,
                project_name: this.project_name,
                consult_date: this.consult_date,
                shoot_date: this.shoot_date,
                shoot_type: this.shoot_type,
                shoot_location: this.shoot_location,
                invoice_cost: this.invoice_cost,
                dept_cost: this.dept_cost,
                dept_status: this.dept_status,
                invoice_status: this.invoice_status,
                notes: this.notes
              })
              .then(() => {
                this.$router.push({
                  name: "view-project",
                  params: { project_id: this.project_id }
                });
              });
          });
        });
    }
  }
};
</script>
