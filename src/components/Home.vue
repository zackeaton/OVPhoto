<template>  
<div id="home-task">
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>About</h4>
      </li>
   
    </ul>
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
            project_id: doc.data().project_id,
            
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
