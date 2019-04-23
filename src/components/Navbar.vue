 <template>
  <nav>
    <div class="nav-wrapper" id='noprint'>
      <div class="container">
        <router-link to="/" class="brand-logo left hide-on-med-and-down">OV Photography</router-link>
        <ul class="right hide-on-med-and-down">
          <li v-if="isLoggedIn">
            <span class="email black-text">{{currentUser}}</span>
          </li>
          <li v-if="isLoggedIn">
            <router-link to="/">Dashboard</router-link>
          </li>
          <li v-if="isLoggedIn">
            <router-link to="/customers">Customers</router-link>
          </li>
          <li v-if="isLoggedIn">
            <router-link to="/projects">Projects</router-link>
          </li>
          <li v-if="!isLoggedIn">
            <router-link to="/login">Login</router-link>
          </li>
          <li v-if="!isLoggedIn">
            <router-link to="/register">Register</router-link>
          </li>
          <li v-if="isLoggedIn">
            <button v-on:click="logout" class="btn black">Logout</button>
          </li>
        </ul>
        
        <ul class="side-nav hide-on-large-only" id="mobile-demo">
          <li v-if="isLoggedIn">
            <router-link to="/">
              <i class="fa fa-chart-line"></i>
            </router-link>
          </li>
          <li v-if="isLoggedIn">
            <router-link to="/customers">
              <i class="fa fa-users"></i>
            </router-link>
          </li>
          <li v-if="isLoggedIn">
            <router-link to="/projects">
              <i class="fa fa-images"></i>
            </router-link>
          </li>
          <li v-if="!isLoggedIn">
            <router-link to="/login">
              <i class="fa fa-sign-in-alt"></i>
            </router-link>
          </li>
          <li v-if="!isLoggedIn">
            <router-link to="/register">
              <i class="fa fa-user-plus"></i>
            </router-link>
          </li>
          <li>
            <a href="/" class="divider"></a>
          </li>
          <li v-if="isLoggedIn">
            <button v-on:click="logout" class="btn black">Log Out</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>


<script>
import firebase from "firebase";
export default {
  name: "navbar",
  data() {
    return {
      isLoggedIn: false,
      currentUser: false
    };
  },
  created() {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true;
      this.currentUser = firebase.auth().currentUser.email;
    }
  },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.go({ path: this.$router.path });
        });
    }
  }
};
</script>

<style scoped>
.email {
  padding-right: 10px;
}
@media print{
  .noprint {
    visibility: hidden;
  }
}
</style>

