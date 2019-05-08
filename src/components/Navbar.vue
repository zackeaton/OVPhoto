 <template>
  <nav>
    <!-- <div class="nav-wrapper soft red"> -->
    <div class="nav-wrapper">
      <div class="container">
        <!-- <router-link to="/" class="brand-logo left hide-on-med-and-down">OV Photography</router-link> -->

        <img
                  src="https://images.squarespace-cdn.com/content/5982735ae6f2e1038a293da0/1555203288932-FV7FLB6AUVDBLVA70EO7/transparent+background+copy.png?content-type=image%2Fpng"
                  style="width:100%; max-width:80px;"
                >

        <ul class="right hide-on-med-and-down">
          <li v-if="isLoggedIn">
            <span class="email black-text">{{currentUser}}</span>
          </li>
          <li v-if="isLoggedIn">
            <router-link to="/tasks">Tasks</router-link>
          </li>
          <li v-if="isLoggedIn">
            <router-link to="/invoices">Invoices</router-link>
          </li>
          <li v-if="isLoggedIn">
            <router-link to="/customers">Clients</router-link>
          </li>
          <li v-if="isLoggedIn">
            <router-link to="/projects">Projects</router-link>
          </li>
          <li v-if="!isLoggedIn">
            <router-link to="/login">Log in</router-link>
          </li>
          <li v-if="!isLoggedIn">
            <router-link to="/register">Register</router-link>
          </li>
          <li v-if="isLoggedIn">
            <button v-on:click="logout" class="btn black">Log out</button>
          </li>
        </ul>

        <ul class="side-nav hide-on-large-only" id="mobile-demo">
          <li v-if="isLoggedIn">
            <router-link to="/tasks">
              <i class="fa fa-chart-line"></i>
            </router-link>
          </li>
          <li v-if="isLoggedIn">
            <router-link to="/invoices">
              <i class="fa fa-credit-card"></i>
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
          this.$router.go({ path: this.$router.push('/')});
        });
    }
  }
};
</script>

<style scoped>
.email {
  padding-right: 10px;
}
</style>

