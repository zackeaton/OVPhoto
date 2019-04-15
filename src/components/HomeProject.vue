<template>
  <div id="projects">
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>Projects</h4>
      </li>
      <li v-for="project in projects" v-bind:key="project.id" class="collection-item">
        <div class="chip">{{project.id}}</div>
        {{project.project_name}}
        <router-link
          class="secondary-content"
          v-bind:to="{ name: 'view-project', params: { project_id: project.project_id }}"
        >
          <i class="fa fa-folder-open"></i>
        </router-link>
      </li>
    </ul>
    <div class="fixed-action-btn">
      <router-link to="/new/project" class="btn-floating btn-large red">
        <i class="fa fa-plus"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import db from "./firebaseInit.js";
export default {
  name: "projects",
  data() {
    return {
      projects: []
    };
  },
  created() {
    db.collection("projects")
      .orderBy("project_id")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            id: doc.id,
            project_id: doc.data().project_id,
            project_name: doc.data().project_name,
            consult_date: doc.data().consult_date,
            shoot_date: doc.data().shoot_date,
            shoot_type: doc.data().shoot_type,
            shoot_location: doc.data().shoot_location,
            invoice_cost: doc.data().invoice_cost,
            dept_cost: doc.data().dept_cost,
            dept_status: doc.data().dept_status,
            invoice_status: doc.data().invoice_status,
            notes: doc.data().notes
          };
          this.projects.push(data);
        });
      });
  }
};
</script>
