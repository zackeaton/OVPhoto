<template>
  <div id="edit-project">
    <h3>Edit Project</h3>Customer:
    <div class="row">
      <div class="input-field col s 12">
        <select v-model="cust_name">
          <option v-for="(name,index) in customerArray" :key="index">{{name}}</option>
        </select>
      </div>
    </div>

    <div class="row">
      <form @submit.prevent="updateProject" class="col s12">
        Project Name:
        <div class="row">
          <div class="input-field col s 12">
            <input type="text" v-model="project_name" required>
            <label></label>
          </div>
        </div>Consult Date:
        <div class="row">
          <div class="input-field col s 12">
            <input type="date" class="datepicker" v-model="consult_date">
            <label></label>
          </div>
        </div>Shoot Date:
        <div class="row">
          <div class="input-field col s 12">
            <input type="date" class="datepicker" v-model="shoot_date" required>
            <label></label>
          </div>
        </div>Shoot Type
        <div class="row">
          <div class="input-field col s 12">
            <select v-model="shoot_type" required>
              >
              <option disabled value>Please select one</option>
              <option>Wedding</option>
              <option>Event</option>
              <option>Engagement Session</option>
              <option>Couples Session</option>
              <option>Anniversary Session</option>
              <option>Personal Branding Session</option>
              <option>Commercial Photoshoot</option>
              <option>Mini Session</option>
              <option>Newborn Session</option>
              <option>Family Session</option>
              <option>Personal Session</option>
              <option>Maternity Session</option>
              <option>Fashion Photoshoot</option>
              <option>Senior Session</option>
              <option>Children's Session</option>
              <option>Other</option>
            </select>
          </div>
        </div>Shoot Location:
        <div class="row">
          <div class="input-field col s 12">
            <input type="text" v-model="shoot_location" required>
            <label></label>
          </div>
        </div>Invoice Cost:
        <div class="row">
          <div class="input-field col s 12">
            <input type="text" v-model="invoice_cost" required>
            <label></label>
          </div>
        </div>Deposit Cost:
        <div class="row">
          <div class="input-field col s 12">
            <input type="text" v-model="dept_cost" required>
            <label></label>
          </div>
        </div>Deposit Status:
        <div class="row">
          <div class="input-field col s 12">
            <select v-model="dept_status" required>
              >
              <option disabled value>Please select one</option>
              <option>Unpaid</option>
              <option>Paid</option>
              <option>Pending</option>
            </select>
          </div>
        </div>Invoice Status:
        <div class="row">
          <div class="input-field col s 12">
            <select v-model="invoice_status" required>
              >
              <option disabled value>Please select one</option>
              <option>Unpaid</option>
              <option>Paid</option>
              <option>Pending</option>
            </select>
          </div>
        </div>Notes:
        <div class="row">
          <div class="input-field col s 12">
            <input type="text" v-model="notes">
            <label></label>
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
      customerArray: [],
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
      project_name: null,
      cust_name: null
    };
  },
  beforeRouteEnter(to, from, next) {
    db.collection("projects")
      .where("project_id", "==", to.params.project_id)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          next(vm => {
            vm.cust_name = doc.data().cust_name;
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
            //vm.cust_name = doc.data().cust_name;
          });
        });
      });
  },
  watch: {
    $route: "fetchData"
  },
  async mounted() {
    const snapshot = await db
      .collection("customers")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.customerArray.push(
            " " + doc.data().first_name + " " + doc.data().last_name
          );
        });
      });
    // const customers = snapshot.docs.map(doc =>{
    //   doc
    // })
    // console.log(customers)
    //console.log(this.customerArray);
  },
  methods: {
    fetchData() {
      db.collection("projects")
        .where("project_id", "==", this.$route.params.project_id)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.cust_name = doc.data().cust_name;
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
            //this.cust_name = doc.data().cust_name;
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
                cust_name: this.cust_name,
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
                //cust_name: this.cust_name
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


<style>
select {
  display: block !important;
}
</style>

