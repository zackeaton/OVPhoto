<template>
  <div id="new-task">
    <h3>New Task</h3>
    <div class="row">
      <form @submit.prevent="saveTask" class="col s12">
        <div class="row">
          <div class="input-field col s 12">
            <input type="text" v-model="task" required>
            <label>Task</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s 12">
            <input type="date" class="datepicker" v-model="due" required>
            <label>Due</label>
          </div>
        </div>Project:
        <div class="row">
          <div class="input-field col s 12">
            <select v-model="project_id">
              <option v-for="(name,index) in projectArray" :key="index">{{name}}</option>
            </select>
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
      projectArray: [],
      task_id: null,
      task: null,
      due: null,
      project_id: null
    };
  },
  async mounted() {
    const snapshot = await db
      .collection("projects")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.projectArray.push(
            " " + doc.data().project_name + " " //+ doc.data().project_name
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
    saveTask() {
      db.collection("tasks")
        .add({
          task_id: this.task_id,
          task: this.task,
          due: this.due,
          project_id: this.project_id
        })
        .then(docRef => this.$router.push("/tasks"))
        .catch(error => console.log(err));
    }
  }
};
</script>
