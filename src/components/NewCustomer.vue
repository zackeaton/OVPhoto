<template>
  <div id="new-customer">
    <h3>New Customer</h3>
    <div class="row">
      <form @submit.prevent="saveCustomer" class="col s12">
        <div class="row">
          <div class="input-field col s 12">
            <input type="text" v-model="customer_id" required>
            <label>Customer ID#</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s 12">
            <input type="text" v-model="first_name" required>
            <label>First Name</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s 12">
            <input type="text" v-model="last_name" required>
            <label>Last Name</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s 12">
            <input type="text" v-model="phone" required>
            <label>Phone Number</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s 12">
            <input type="text" v-model="email" required>
            <label>Email</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s 12">
            <input type="text" v-model="social" required>
            <label>Instagram @</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s 12">
            <input type="text" v-model="returning_customer" required>
            <label>Returning Customer Y/N</label>
          </div>
        </div>

        <button type="submit" class="btn">Submit</button>
        <router-link to="/" class="btn grey"> Cancel</router-link>
      </form>
      </div>
  </div>
</template>


<script>
import db from './firebaseInit.js'
export default {
  name: 'new-customer',
  data() {
    return{
      customer_id: null,
      first_name: null,
      last_name: null,
      phone: null,
      email: null,
      social: null,
      returning_customer: null
    }
  },
  methods: {
    saveCustomer () {
      db.collection('customers').add({
        customer_id: this.customer_id,
        first_name: this.first_name,
        last_name: this.last_name,
        phone: this.phone,
        email: this.email,
        social: this.social,
        returning_customer: this.returning_customer
      })
      .then(docRef =>
        this.$router.push('/'))
      .catch(error => console.log(err))
    }
  }
}
</script>
