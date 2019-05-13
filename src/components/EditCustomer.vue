<template>
  <div id="edit-customer">
    <h3>Edit Client</h3>
    <div class="row">
      First Name
      <form class="col s12">
        <div class="row">
          <div class="input-field col s 12">
            
            <input type="text" v-model="first_name" required>
            <label></label>
          </div>
        </div>Last Name
        <div class="row">
          <div class="input-field col s 12">
            
            <input type="text" v-model="last_name" required>
            <label></label>
          </div>
        </div>Phone
        <div class="row">
          <div class="input-field col s 12">
            
            <input type="tel" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" v-model="phone">
            <label></label>
          </div>
        </div>Email
        <div class="row">
          <div class="input-field col s 12">
            
            <input type="email" v-model="email" required>
            <label></label>
          </div>
        </div>
        Lead Generation:
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
        <!-- <div class="row">
          <div class="input-field col s 12">
            Returning Customer
          <input type="text" v-model="returning_customer" required>
          <label></label>
          </div>
        </div>-->

        <button type="submit" @click="updateCustomer" class="btn">Submit</button>
        <router-link to="/customers" class="btn grey">Cancel</router-link>
        <button onClick='alert("This page allows you to edit client info. Referral type & phone number are not required");' 
  class='btn'>Help</button>
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
      //returning_customer: null
    };
  },
  beforeRouteEnter(to, from, next) {
    db.collection("customers")
      .doc(to.params.customer_id)
      .get()
      .then(doc => {
        console.log(doc);
        next(vm => {
          vm.customer_id = doc.data().customer_id;
          vm.first_name = doc.data().first_name;
          vm.last_name = doc.data().last_name;
          vm.phone = doc.data().phone;
          vm.email = doc.data().email;
          vm.social = doc.data().social;
         // vm.returning_customer = doc.data().returning_customer;
        });
        //});
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
            //this.returning_customer = doc.data().returning_customer;
          });
        });
    },
    updateCustomer() {

      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email))
      {
        db.collection("customers")
        .doc(this.$route.params.customer_id)
        .set({
          first_name: this.first_name,
          last_name: this.last_name,
          phone: this.phone,
          email: this.email,
          social: this.social,
          //returning_customer: this.returning_customer
        })
        .then(docRef => {
          this.$router.push({
            name: "view-customer",
            params: { customer_id: this.$route.params.customer_id}
          });
        }).catch((err)=>{
          // console.log(err)
        });
      //});
       return (true)
      }
      alert("You have entered an invalid email address!")
      return (false)
       //console.log(this.first_name)
      
    }
  }
};
</script>
<style>
select {
  display: block !important;
}
</style>
