<template>
  <div id="view-project">
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>Project # {{project_id}}</h4>
      </li>
      <li class="collection-item">Customer: {{customer}}</li>
      <li class="collection-item">project ID: {{project_id}}</li>
      <li class='collection-item'>Project Name: {{project_name}}</li>
      <li class="collection-item">Consult Date: {{consult_date}}</li>
      <li class="collection-item">Shoot Date: {{shoot_date}}</li>
      <li class="collection-item">Shoot Type: {{shoot_type}}</li>
      <li class="collection-item">Location: {{shoot_location}}</li>
      <li class="collection-item">Invoice Cost: {{invoice_cost}}</li>
      <li class="collection-item">Deposit Cost: {{dept_cost}}</li>
      <li class="collection-item">Deposite Status: {{dept_status}}</li>
      <li class="collection-item">Invoice Status: {{invoice_status}}</li>
      <li class="collection-item">Notes: {{notes}}</li>
    </ul>
    <router-link to="/projects" class="btn grey">Back</router-link>
    <button @click="deleteProject" class="btn red">Delete</button>
    <router-link v-bind:to="{name: 'price-project', params: {project_id: project_id}}">
        <button class='btn red'>Price Project</button>
      </router-link>

    <div class="fixed-action-btn">
      <router-link
        v-bind:to="{name: 'edit-project', params: {project_id: project_id}}"
        class="btn-floating btn-large red"
      >
        <i class="fa fa-pencil-alt"></i>
      </router-link>
    </div>
  </div>
</template>



<script>
import db from "./firebaseInit.js";
export default {
  name: "view-project",
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
            vm.project_name = doc.data().project_name
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
    deleteProject() {
      if (confirm("Are you sure?")) {
        db.collection("projects")
          .where("project_id", "==", this.$route.params.project_id)
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              doc.ref.delete();
              this.$router.push("/projects");
            });
          });
      }
    }
  }
};
</script>
