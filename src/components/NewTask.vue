<template>
  <div id="new-task">
    <h3>New Task</h3>
    <div class="row">
      <form @submit.prevent="saveTask" class="col s12">
        <div class="row">
          <div class="input-field col s 12">
            <input type="text" v-model="task_id" required>
            <label>Task ID</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s 12">
            <input type="text" v-model="task" required>
            <label>Task</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s 12">
            <input type="date" class='datepicker' v-model="due" required>
            <label>Due</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s 12">
            <input type="text" v-model="project_id" required>
            <label>Project ID</label>
          </div>
        </div>

        <button type="submit" class="btn">Submit</button>
        <router-link to="/tasks" class="btn grey">Cancel</router-link>
      </form>
    </div>
  </div>
</template>


<script>
import db from "./firebaseInit.js";
export default {
  name: "new-task",
  data() {
    return {
      task_id: null,
      task: null,
      due: null,
      project_id: null,
    };
  },
  methods: {
    saveTask() {
      db.collection("tasks")
        .add({
          task_id: this.task_id,
          task: this.task,
          due: this.due,
          project_id: this.project_id,
        })
        .then(docRef => this.$router.push("/tasks"))
        .catch(error => console.log(err));
    }
  }
};
</script>
