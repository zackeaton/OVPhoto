<template>
  <div id="price-project">
    <h3>Price Project</h3>
    <div class="row">
      <form @submit.prevent="updateProject" class="col s12">

        <div class="row">
          <div class="input-field col s 12">
            <input disabled type="text" v-model="project_id" required>
            <label>Project ID#</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s 12">
            <input type="number" step='.01' v-model="main_hourly" required>
            <label>Main Shooter Hourly Rate</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s 12">
            <input type="number" step='.01' v-model="shoot_hours" required>
            <label>Project Shoot Hours</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s 12">
            <input type="number" step='.01' v-model="edit_hours" required>
            <label>Project Edit Hours</label>
          </div>
        </div>

        

        <button type="calcuate" class="btn">Calcuate Totals</button>
        <router-link to="/projects" class="btn grey">Cancel</router-link>
      </form>
    </div>
  </div>
</template>