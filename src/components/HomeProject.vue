<template>
  <div id="projects">
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>Projects</h4>
      </li>
      <li v-for="project in projects" v-bind:key="project.id" class="collection-item">
        <div class="chip">{{project.cust_name}}</div>
        {{project.project_name}}
        <router-link
          class="secondary-content"
          v-bind:to="{ name: 'view-project', params: { project_id: project.id }}"
        >
          <i class="fa fa-folder-open"></i>
        </router-link>
      </li>
    </ul>
    <div class="fixed-action-btn">
      <router-link to="/new/project" class="btn-floating btn-large">
        <i class="fa fa-plus"></i>
      </router-link>
    </div>
    <a href="https://docs.google.com/document/d/1vn1T689zCBsyKEUx4AkhEnkbf2BtCFxATj-nHKCH4RQ/edit#bookmark=id.qx3jtt8nhc9v" target="_blank" class="btn">Help</a>
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
      .orderBy("shoot_date")
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
            notes: doc.data().notes,
            cust_name: doc.data().cust_name
          };
          this.projects.push(data);
        });
      });
  }
};
</script>
