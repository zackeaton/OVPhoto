<template>
  <div id="todos">
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>Todos</h4>
      </li>
      <li v-for="todo in todos" v-bind:key="todo.id" class="collection-item">
        <div class="chip">{{todo.id}}</div>
        {{todo.title}} {{todo.completed}}
        </li>
       </ul>
  </div>
</template>




<script>
import TodoItem from './TodoItem.vue';

export default {
    name: "Todos",
    
data() {
    return {
      todos: [
        {
          id: 1,
          title: "Todo One",
          completed: false
        },
        {
          id: 2, 
          title: "Todo Two",
          completed: true
        }
      ]
    }
  }
}

</script>

<style scoped>

</style>
