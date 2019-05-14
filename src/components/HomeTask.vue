<template>
  <div id="home-task">
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>Tasks</h4>
      </li>
      <li v-for="task in tasks" v-bind:key="task.id" class="collection-item">
        <!--  <div class="chip">Due: {{task.id}}</div> {{task.task_id}}  -->
        <div class="chip">Due: {{task.due}}</div>
        {{task.task}} |
        For: {{task.project_id}}
        <router-link
          class="secondary-content"
          v-bind:to="{ name: 'view-task', params: { task_id: task.id }}"
        >
          <i class="fa fa-folder-open"></i>
        </router-link>
      </li>
    </ul>
    <div class="fixed-action-btn">
      <router-link to="/new/task" class="btn-floating btn-large">
        <i class="fa fa-plus"></i>
      </router-link>
    </div>

 <!-- <router-link to="/help" class="btn">
    Help
  </router-link> -->

  <a href="https://docs.google.com/document/d/1vn1T689zCBsyKEUx4AkhEnkbf2BtCFxATj-nHKCH4RQ/edit#bookmark=id.2xz2pjxiweyj" target="_blank" class="btn">Help</a>
  </div>
</template>

<script>
import db from "./firebaseInit.js";
export default {
  name: "dashboard",
  data() {
    return {
      tasks: []
    };
  }, 
  created() {
    db.collection("tasks")
      .orderBy("project_id")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            id: doc.id,
            task_id: doc.data().task_id,
            task: doc.data().task,
            due: doc.data().due,
            project_id: doc.data().project_id
          };
          this.tasks.push(data);
        });
      });
  }
};
</script>


<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}

.btn:hover {
  background: #666;
}
</style>
