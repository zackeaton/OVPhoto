<template>
  <div id="view-task">
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>{{task}}</h4>
      </li>
      <li class="collection-item">Task: {{task}}</li>
      <li class="collection-item">Due: {{due}}</li>
      <li class="collection-item">Project Name: {{project_id}}</li>
    </ul>

    <router-link to="/tasks" class="btn grey">Back</router-link>
    <button @click="deleteTask" class="btn red">Delete</button>

    <div class="fixed-action-btn">
      <router-link
        v-bind:to="{name: 'edit-tasks', params: {task_id: this.tempTask}}"
        class="btn-floating btn-large"
      >
        <i class="fa fa-pencil-alt"></i>
      </router-link>
    </div>

    <a href="https://docs.google.com/document/d/1vn1T689zCBsyKEUx4AkhEnkbf2BtCFxATj-nHKCH4RQ/edit#bookmark=id.x9gx9atf1hr9" target="_blank" class="btn">Help</a>
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
      project_name: null
    };
  },
  beforeRouteEnter(to, from, next) {
    db.collection("tasks")
      .doc(to.params.task_id)
      .get()
      .then(doc => {
        next(vm => {
          console.log(vm);
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
  mounted(){
    this.tempTask = this.$route.params.task_id
console.log(this.$route)
  },
  methods: {
    fetchData() {
      db.collection("tasks")
        .where("task_id", "==", this.$route.params.task_id)
        .get()
        .then((doc) => {
            this.task_id = doc.data().task_id;
            this.task = doc.data().task;
            this.due = doc.data().due;
            this.project_id = doc.data().project_id;
          });
        //});
    },
    deleteTask() {
      console.log(this.$route.params.task_id);
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
