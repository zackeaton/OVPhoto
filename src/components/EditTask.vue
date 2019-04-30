<template>
  <div id="edit-task">
    <h3>Edit Task</h3>
    <div class="row">
      <form @submit.prevent="updateTask" class="col s12">
        <div class="row">
          <div class="input-field col s 12">
            Task ID
          <input disabled type="text" v-model="task_id" required>
          <label></label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s 12">
            Task
          <input type="text" v-model="task" required>
          <label></label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s 12">
            Due
          <input type="text" v-model="due" required>
          <label></label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s 12">
            Project ID
          <input type="text" v-model="project_id" required>
          <label></label>
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
  name: "edit-task",
  data() {
    return {
      task_id: null,
      task: null,
      due: null,
      project_id: null,
    };
  },
  beforeRouteEnter(to, from, next) {
    db.collection("tasks")
      .where("task_id", "==", to.params.task_id)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          next(vm => {
            vm.task_id = doc.data().task_id;
            vm.task = doc.data().task;
            vm.due = doc.data().due;
            vm.project_id = doc.data().project_id;
          });
        });
      });
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      db.collection("tasks")
        .where("task_id", "==", this.$route.params.task_id)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.task_id = doc.data().task_id;
            this.task = doc.data().task;
            this.due = doc.data().due;
            this.project_id = doc.data().project_id;
          });
        });
    },
    updateTask() {
      db.collection("tasks")
        .where("task_id", "==", this.$route.params.task_id)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.ref
              .update({
                task_id: this.task_id,
                task: this.task,
                due: this.due,
                project_id: this.project_id,
              })
              .then(() => {
                this.$router.push({
                  name: "view-task",
                  params: { task_id: this.task_id }
                });
              });
          });
        });
    }
  }
};
</script>
