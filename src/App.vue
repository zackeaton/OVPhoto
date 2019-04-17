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
import Todos from './components/Todos';

export default {
  name: 'app',
  components: {
    Navbar,
    NewCustomer,
    NewProject,
    Todos
  }
};
</script>

<style>
nav {
  margin-bottom: 10px;
}
</style>
