<template>
  <div id="new-customer">
    <h3>New Client</h3>
    <div class="row">
      <form @submit.prevent="saveCustomer" class="col s12">
        First Name:
        <div class="row">
          <div class="input-field col s 12">
            <input type="text" v-model="first_name" required>
            <label></label>
          </div>
        </div>Last Name:
        <div class="row">
          <div class="input-field col s 12">
            <input type="text" v-model="last_name" required>
            <label></label>
          </div>
        </div>Phone Number:
        <div class="row">
          <div class="input-field col s 12">
            <input type="tel" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" v-model="phone">
            <label></label>
          </div>
        </div>Email:
        <div class="row">
          <div class="input-field col s 12">
            <input type="email" v-model="email" required>
            <label></label>
          </div>
        </div>Lead Generation:
        <div class="row">
          <div class="input-field col s 12">
            <select v-model="social" required>
              >
              <option disabled value>Please select one</option>
              <option>Instagram</option>
              <option>Facebook</option>
              <option>Google</option>
              <option>The Knot</option>
              <option>Wedding Wire</option>
              <option>Wedding Pioneer</option>
              <option>Wedding Chicks</option>
              <option>Vendor Referral</option>
              <option>Client Referral</option>
              <option>Friend Referral</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        <!--  Returning Customer Y/N:
         <div class="row">
          <div class="input-field col s 12">
            <select v-model="returning_customer" required>>
            <option disabled value="">Please select one</option>
            <option></option>
            <option>Facebook</option>
              </select>
          </div>
        </div>-->

        <button type="submit" class="btn">Submit</button>
        <router-link to="/customers" class="btn grey">Cancel</router-link>
      </form>
    </div>
  </div>
</template>


<script>
import db from "./firebaseInit.js";
export default {
  name: "new-customer",
  data() {
    return {
      customer_id: null,
      first_name: null,
      last_name: null,
      phone: null,
      email: null,
      social: null,
      //returning_customer: null
    };
  },
  methods: {
    saveCustomer() {

      {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email))
      {
         db.collection("customers")
        .add({
          customer_id: this.customer_id,
          first_name: this.first_name,
          last_name: this.last_name,
          phone: this.phone,
          email: this.email,
          social: this.social,
          //returning_customer: this.returning_customer
        })
        .then(docRef => this.$router.push("/customers"))
        .catch(error => console.log(err));
        return (true)
       }
        alert("You have entered an invalid email address!")
        return (false)
      }

     
    }
  }
};
</script>
<style>
select {
  display: block !important;
}
</style>
