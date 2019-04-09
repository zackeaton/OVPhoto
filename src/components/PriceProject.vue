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
        <button type="submit" class="btn">Submit</button>
        <router-link to="/projects" class="btn grey">Cancel</router-link>
      </form>
    </div>
  </div>
</template>