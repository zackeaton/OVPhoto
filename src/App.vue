<template>
  <div id="app">
    <Navbar /><br>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import NewCustomer from './components/NewCustomer';
import NewProject from './components/NewProject';
import NewTask from './components/NewTask';
import NewInvoice from './components/NewInvoice';

export default {
  name: 'app',
  components: {
    Navbar,
    NewCustomer,
    NewProject,
    NewInvoice,
    NewTask,
  }
};
</script>

<style>
nav {
  margin-bottom: 10px;
}
</style>
