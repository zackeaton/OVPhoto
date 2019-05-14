<template>
  <div id="home-customer">
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>Clients</h4>
      </li>
      <li v-for="customer in customers" v-bind:key="customer.id" class="collection-item">
        <!-- <div class="chip">{{customer.id}}</div> -->
        {{customer.first_name}} {{customer.last_name}}
        <router-link
          class="secondary-content"
          v-bind:to="{ name: 'view-customer', params: { customer_id: customer.id }}"
        >
          <i class="fa fa-folder-open"></i>
        </router-link>
      </li>
    </ul>
    <div class="fixed-action-btn">
      <router-link to="/new/customer" class="btn-floating btn-large">
        <i class="fa fa-plus"></i>
      </router-link>
    </div>
  
  <a href="https://docs.google.com/document/d/1vn1T689zCBsyKEUx4AkhEnkbf2BtCFxATj-nHKCH4RQ/edit#bookmark=id.rf23btbpjged" target="_blank" class="btn">Help</a>
  </div>
</template>

<script>
import db from "./firebaseInit.js";
export default {
  name: "dashboard",
  data() {
    return {
      customers: []
    };
  },
  created() {
    db.collection("customers")
      .orderBy("last_name")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            id: doc.id,
            customer_id: doc.data().customer_id,
            first_name: doc.data().first_name,
            last_name: doc.data().last_name,
            phone: doc.data().phone,
            email: doc.data().email,
            social: doc.data().social,
            //returning_customer: doc.data().returning_customer
          };
          this.customers.push(data);
        });
      });
  }
};
</script>
