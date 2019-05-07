<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col s12 m8 offset-m2">
          <div class="login card-panel grey lighten-4 black-text center">
            <h3>
              Login
              <i class="fa fa-sign-in-alt"></i>
            </h3>
            <form action="index.html">
              <div class="input-field">
                <i class="material-icons prefix">
                  <i class="fa fa-envelope"></i>
                </i>
                <input type="email" id="email" v-model="email">
                <label for="email">Email Address</label>
              </div>

              <div class="input-field">
                <i class="material-icons prefix">
                  <i class="fa fa-key"></i>
                </i>
                <input type="password" id="password" v-model="password">
                <label for="password">Password</label>
              </div>
              <button
                v-on:click="login"
                class="btn btn-large btn-extended grey lighten-4 black-text"
              >Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "login",
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login: function(e) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            alert(`You are logged in as ${this.email}`);
            this.$router.go({ path: this.$router.path });
          },
          err => {
            alert(err.message);
          }
        );
      e.preventDefault();
    }
  }
};
</script>
