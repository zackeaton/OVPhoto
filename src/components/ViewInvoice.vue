<template>
  <div id="view-invoice">
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>Invoice # {{invoice_id}}</h4>
      </li>
      <li class="collection-item">Project ID: {{project_id}}</li>
      <li class='collection-item'>Invoice ID: {{invoice_id}}</li>
      <li class='collection-item'>Created: {{created}}</li>
      <li class='collection-item'>Due: {{due}}</li>
      <li class='collection-item'>Item 1: {{item_1}}</li> 
      <li class='collection-item'>Cost 1: {{cost_1}}</li>     
      <li class='collection-item'>Item 2: {{item_2}}</li>
      <li class='collection-item'>Cost 2: {{cost_2}}</li>
      <li class='collection-item'>Item 3: {{item_3}}</li>
      <li class='collection-item'>Cost 3: {{cost_3}}</li>
      
    </ul>
    <router-link to="/invoices" class="btn grey">Back</router-link>
    <button @click="deleteInvoice" class="btn red">Delete</button>

    <div class="fixed-action-btn">
      <router-link
        v-bind:to="{name: 'edit-invoice', params: {invoice_id: invoice_id}}"
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
  name: "view-invoice",
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
    deleteInvoice() {
      if (confirm("Are you sure?")) {
        db.collection("invoices")
          .where("invoice_id", "==", this.$route.params.invoice_id)
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              doc.ref.delete();
              this.$router.push("/invoices");
            });
          });
      }
    }
  }
};
</script>
