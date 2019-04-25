<template>
  <div id="edit-customer">
    <h3>Edit Customer</h3>
    <div class="row">
      <form @submit.prevent="updateCustomer" class="col s12">
        <div class="row">
          <div class="input-field col s 12">
            Customer ID
          <input disabled type="text" v-model="customer_id" required>
          <label></label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s 12">
            First Name
          <input type="text" v-model="first_name" required>
          <label></label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s 12">
            Last Name
          <input type="text" v-model="last_name" required>
          <label></label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s 12">
            Phone
          <input type="text" v-model="phone" required>
          <label></label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s 12">
            Email
          <input type="text" v-model="email" required>
          <label></label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s 12">
            Social
          <input type="text" v-model="social" required>
          <label></label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s 12">
            Returning Customer
          <input type="text" v-model="returning_customer" required>
          <label></label>
          </div>
        </div>

        <button type="submit" class="btn">Submit</button>
        <router-link to="/customers" class="btn grey">Cancel</router-link>
      </form>
    </div>
  </div>
</template>


<script>
import db from "./firebaseInit.js";
export default {
  name: "edit-customer",
  data() {
    return {
      customer_id: null,
      first_name: null,
      last_name: null,
      phone: null,
      email: null,
      social: null,
      returning_customer: null
    };
  },
  beforeRouteEnter(to, from, next) {
    db.collection("customers")
      .where("customer_id", "==", to.params.customer_id)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          next(vm => {
            vm.customer_id = doc.data().customer_id;
            vm.first_name = doc.data().first_name;
            vm.last_name = doc.data().last_name;
            vm.phone = doc.data().phone;
            vm.email = doc.data().email;
            vm.social = doc.data().social;
            vm.returning_customer = doc.data().returning_customer;
          });
        });
      });
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      db.collection("customers")
        .where("customer_id", "==", this.$route.params.customer_id)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.customer_id = doc.data().customer_id;
            this.first_name = doc.data().first_name;
            this.last_name = doc.data().last_name;
            this.phone = doc.data().phone;
            this.social = doc.data().social;
            this.returning_customer = doc.data().returning_customer;
          });
        });
    },
    updateCustomer() {
      db.collection("customers")
        .where("customer_id", "==", this.$route.params.customer_id)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.ref
              .update({
                customer_id: this.customer_id,
                first_name: this.first_name,
                last_name: this.last_name,
                phone: this.phone,
                email: this.email,
                social: this.social,
                returning_customer: this.returning_customer
              })
              .then(() => {
                this.$router.push({
                  name: "view-customer",
                  params: { customer_id: this.customer_id }
                });
              });
          });
        });
    }
  }
};
</script>
