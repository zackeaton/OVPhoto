<template>
  <div id="home-invoice">
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>Invoices</h4>
      </li>
      <li v-for="invoice in invoices" v-bind:key="invoice.id" class="collection-item">
        <div class="chip">{{invoice.fbase_id}}</div>
        <!--<div class="chip">{{invoice.id}}</div>-->
        Due: {{invoice.due}}
        <router-link
          class="secondary-content"
          v-bind:to="{ name: 'view-invoice', params: { invoice_id: invoice.id }}"
        >
          <i class="fa fa-folder-open"></i>
        </router-link>
      </li>
    </ul>
    <div class="fixed-action-btn">
      <router-link to="/new/invoice" class="btn-floating btn-large">
        <i class="fa fa-plus"></i>
      </router-link>
    </div>
    <a href="https://docs.google.com/document/d/1vn1T689zCBsyKEUx4AkhEnkbf2BtCFxATj-nHKCH4RQ/edit#bookmark=id.d03ifmhcs0lf" target="_blank" class="btn">Help</a>
  </div>
</template>

<script>
import db from "./firebaseInit.js";
export default {
  name: "home-invoice",
  data() {
    return {
      invoices: []
    };
  },
  created() {
    db.collection("invoices")
      .orderBy("due")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            id: doc.id,
            cost_1: doc.data().cost_1,
            cost_2: doc.data().cost_2,
            cost_3: doc.data().cost_3,
            created: doc.data().created,
            due: doc.data().due,
            invoice_id: doc.data().invoice_id,
            item_1: doc.data().item_1,
            item_2: doc.data().item_2,
            item_3: doc.data().item_3,
            project_id: doc.data().project_id,
            fbase_id: doc.data().fbase_id
          };
          this.invoices.push(data);
        });
      });
  }
};
</script>
