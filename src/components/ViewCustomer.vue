<template>
  <div id="view-customer">
    <ul class="collection with-header">
      <li class="collection-header"><h4>{{first_name}} {{last_name}}</h4></li>
      <li class="collection-item">Customer ID: {{customer_id}}</li>
      <li class="collection-item">First Name: {{first_name}}</li>
      <li class="collection-item">Last Name: {{last_name}}</li>
      <li class="collection-item">Telephone: {{phone}}</li>
      <li class="collection-item">Email: {{email}}</li>
      <li class="collection-item">Instagram (@): {{social}}</li>
      <li class="collection-item">Are they a returning customer: {{returning_customer}}</li>

      </ul>

      <router-link to="/customers" class="btn grey">Back</router-link>
      <button @click="deleteCustomer" class="btn red">Delete</button>

          <div class="fixed-action-btn">
      <router-link v-bind:to="{name: 'edit-customer', params: {customer_id: customer_id}}" class="btn-floating btn-large red">
      <i class="fa fa-pencil-alt"></i>
      </router-link>

  </div>
  </div>
</template>



<script>
import db from './firebaseInit.js'
export default {
  name: 'view-customer',
  data() {
    return {
      customer_id: null,
      first_name: null,
      last_name: null,
      phone: null,
      email: null,
      social: null,
      returning_customer: null
    }
  },
  beforeRouteEnter (to, from, next) {
    db.collection('customers').where('customer_id', '==', to.params.customer_id)
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        next(vm => {
          vm.customer_id = doc.data().customer_id
          vm.first_name = doc.data().first_name
          vm.last_name = doc.data().last_name
          vm.phone = doc.data().phone
          vm.email = doc.data().email
          vm.social = doc.data().social
          vm.returning_customer = doc.data().returning_customer
        })
      })
    })
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      db.collection('customers').where
      ('customer_id', '==', this.$route.params.customer_id)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.customer_id = doc.data().customer_id
          this.first_name = doc.data().first_name
          this.last_name = doc.data().last_name
          this.phone = doc.data().phone
          this.social = doc.data().social
          this.returning_customer = doc.data().returning_customer
        })
      })
    },
    deleteCustomer () {
      if(confirm('Are you sure?')) {
         db.collection('customers').where
      ('customer_id', '==', this.$route.params.customer_id)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          doc.ref.delete();
          this.$router.push('/customers')
        })
        })
      }
    }
  }
}
</script>
