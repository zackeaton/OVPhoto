<template>
  <div id="view-task">
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>Task # {{task_id}}</h4>
      </li>
      <li class="collection-item">Task: {{task}}</li>
      <li class="collection-item">Due: {{due}}</li>
      <li class="collection-item">Project ID: {{project_id}}</li>
    </ul>

    <router-link to="/tasks" class="btn grey">Back</router-link>
    <button @click="deleteTask" class="btn red">Delete</button>

    <div class="fixed-action-btn">
      <router-link
        v-bind:to="{name: 'edit-tasks', params: {task_id: task_id}}"
        class="btn-floating btn-large red"
      >
        <i class="fa fa-pencil-alt"></i>
      </router-link>
    </div>
  </div>
</template>



<script>
import db from "./firebaseInit.js";
export default {
  name: "view-task",
  data() {
    return {
      task_id: null,
      task: null,
      due: null,
      project_name: null,
    };
  },
  beforeRouteEnter(to, from, next) {
    db.collection("tasks")
      .doc(to.params.task_id)
      .get()
      .then((doc) => {
          next(vm => {
            console.log(vm)
            vm.task_id = doc.data().task_id;
            vm.task = doc.data().task;
            vm.due = doc.data().due;
            vm.project_id = doc.data().project_id;
          });
        });
     // });
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
          querySnapshot(doc => {
            this.task_id = doc.data().task_id;
            this.task = doc.data().task;
            this.due = doc.data().due;
            this.project_id = doc.data().project_id;
          });
        });
    },
    deleteTask() {
      console.log(this.$route.params.task_id)
      if (confirm("Are you sure?")) {
        db.collection("tasks")
          .doc(this.$route.params.task_id)
          .get()
          .then(doc => {
              doc.ref.delete();
              this.$router.push("/tasks");
            });
         // });
      }
    }
  }
};
</script>
