<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import NewCustomer from './components/NewCustomer';
import EditCustomer from './components/EditCustomer'

export default {
  name: 'app',
  components: {
    Navbar,
    NewCustomer

  }
};
</script>

<style>
nav {
  margin-bottom: 10px;
}
</style>
