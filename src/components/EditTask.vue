<template>
  <div id="edit-task">
    <h3>Edit Task</h3>
    <div class="row">
      <form class="col s12">
        Task
        <div class="row">
          <div class="input-field col s 12">
            <input type="text" v-model="task" required>
            <label></label>
          </div>
        </div>Due
        <div class="row">
          <div class="input-field col s 12">
            <input type="date" class="datepicker" v-model="due" required>
            <label></label>
          </div>
        </div>Project:
        <div class="row">
          <div class="input-field col s 12">
            <select v-model="project_id">
              <option v-for="(name,index) in projectArray" :key="index">{{name}}</option>
            </select>
          </div>
        </div>

        <button type="submit" @click="updateTask" class="btn">Submit</button>
        <router-link to="/tasks" class="btn grey">Cancel</router-link>
        <button onClick='alert("This page allows you to edit existing tasks. You can change the task name, the task due date, and the list of projects you can assign this task to");' 
  class='btn'>Help</button>
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
      projectArray: [],
      task_id: null,
      task: null,
      due: null,
      project_id: null
    };
  },
  beforeRouteEnter(to, from, next) {
    db.collection("tasks")
      .doc(to.params.task_id)
      .get()
      .then(doc => {
        console.log(doc);
        next(vm => {
            vm.task_id = doc.data().task_id;
            vm.task = doc.data().task;
            vm.due = doc.data().due;
            vm.project_id = doc.data().project_id;
          });
        });
      //});
  },
  watch: {
    $route: "fetchData"
  },
  async mounted() {
    const snapshot = await db
      .collection("projects")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.projectArray.push(
            " " + doc.data().project_name + " " //+ doc.data().last_name
          );
        });
      });
    // const customers = snapshot.docs.map(doc =>{
    //   doc
    // })
    // console.log(customers)
    //console.log(this.customerArray);
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
         .doc(this.$route.params.task_id)
        .set({
                task_id: this.task_id,
                task: this.task,
                due: this.due,
                project_id: this.project_id
              })
              .then(docRef => {
          this.$router.push({
            name: "view-task",
            params: { task_id: this.$route.params.task_id}
          });
        }).catch((err)=>{
          // console.log(err)
        });
      //});
    }
  }
};
</script>

<style>
select {
  display: block !important;
}
</style>