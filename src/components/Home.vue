<template>
  <div id="home-task">
    <ul class="collection with-header">
      <li class="collection-header">
        <center><h4>Welcome</h4></center>
      </li>
      <center>
      <div><h6>Welcome to the OV Photography Web Application.<br>To get started please click the "Log in" or "Register" button below.</h6></div>
    </center>
    </ul>
    <center>
      <router-link to="/login" class="btn grey">Log in</router-link>
        <router-link to="/register" class="btn grey">Register</router-link>
        <a href="https://docs.google.com/document/d/1vn1T689zCBsyKEUx4AkhEnkbf2BtCFxATj-nHKCH4RQ/edit#bookmark=id.bl6lrpod9bjb" target="_blank" class="btn">Help</a>
    </center>
    <div class="fixed-action-btn">
      <router-link to="/new/task" class="btn-floating btn-large red">
        <i class="fa fa-plus"></i>
      </router-link>
    </div>
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
      .orderBy("due")
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
