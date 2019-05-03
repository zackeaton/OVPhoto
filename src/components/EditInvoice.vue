<template>
  <div id="edit-invoice">
    <h3>Edit Invoice</h3>
    <div class="row">
      <form @submit.prevent="updateInvoice" class="col s12">
          <div class="row">
          <div class="input-field col s 12">
            Project ID:
            <input disabled type="text" v-model="project_id" required>
            <label></label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s 12">
            Invoice ID:
            <input disabled type="text" v-model="invoice_id" required>
            <label></label>
          </div>
        </div>
         <div class="row">
          <div class="input-field col s 12">
            Created:
            <input type="date" class='datepicker' v-model="created" required>
            <label></label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s 12">
            Due:
            <input type="date" class='datepicker' v-model="due" required>
            <label></label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s 12">
            Item 1:
            <input type="text" v-model="item_1" required>
            <label></label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s 12">
            Cost 1:
            <input type="text" v-model="cost_1" required>
            <label></label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s 12">
            Item 2:
            <input type="text" v-model="item_2" required>
            <label></label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s 12">
            Cost 2:
            <input type="text" v-model="cost_2" required>
            <label></label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s 12">
            Item 3:
            <input type="text" v-model="item_3" required>
            <label></label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s 12">
            Cost 3:
            <input type="text" v-model="cost_3" required>
            <label></label>
          </div>
        </div>
        
        <button type="submit" class="btn">Submit</button>
        <router-link to="/invoices" class="btn grey">Cancel</router-link>
      </form>
    </div>
  </div>
</template>


<script>
import db from "./firebaseInit.js";
export default {
  name: "edit-invoice",
  data() {
    return {
      cost_1: null,
      cost_2: null,
      cost_3: null,
      created: null,
      due: null,
      invoice_id: null,
      item_1: null,
      item_2: null,
      item_3: null,
      project_id: null
    };
  },
  beforeRouteEnter(to, from, next) {
    db.collection("invoices")
      .where("invoice_id", "==", to.params.invoice_id)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          next(vm => {
            vm.cost_1 = doc.data().cost_1;
            vm.cost_2 = doc.data().cost_2;
            vm.cost_3 = doc.data().cost_3;
            vm.created = doc.data().created;
            vm.due = doc.data().due;
            vm.invoice_id = doc.data().invoice_id;
            vm.item_1 = doc.data().item_1;
            vm.item_2 = doc.data().item_2;
            vm.item_3 = doc.data().item_3;
            vm.project_id = doc.data().project_id
          });
        });
      });
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      db.collection("invoices")
        .where("invoice_id", "==", this.$route.params.invoice_id)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.cost_1 = doc.data().cost_1;
            this.cost_2 = doc.data().cost_2;
            this.cost_3 = doc.data().cost_3;
            this.created = doc.data().created;
            this.due = doc.data().due;
            this.invoice_id = doc.data().invoice_id;
            this.item_1 = doc.data().item_1;
            this.item_2 = doc.data().item_2;
            this.item_3 = doc.data().item_3;
            this.project_id = doc.data().project_id;
          });
        });
    },
    updateInvoice() {
      db.collection("invoices")
        .where("invoice_id", "==", this.$route.params.invoice_id)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.ref
              .update({
                cost_1: this.cost_1,
                cost_2: this.cost_2,
                cost_3: this.cost_3,
                created: this.created,
                due: this.due,
                invoice_id: this.invoice_id,
                item_1: this.item_1,
                item_2: this.item_2,
                item_3: this.item_3,
                project_id: this.project_id,
              })
              .then(() => {
                this.$router.push({
                  name: "view-invoice",
                  params: { invoice_id: this.invoice_id }
                });
              });
          });
        });
    }
  }
};
</script>
