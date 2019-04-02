<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col s12 m8 offset-m2">
          <div class="login card-panel grey lighten-4 black-text center">
            <h3>Register</h3>
            <form action="index.html">
              <div class="input-field">
                <i class="material-icons prefix">
                  <i class="fa fa-signature"></i>
                </i>
                <input id="first_name" type="text" class="validate">
                <label for="first_name">First Name</label>
              </div>
              <div class="input-field">
                <i class="material-icons prefix">
                  <i class="fa fa-signature"></i>
                </i>
                <input id="last_name" type="text" class="validate">
                <label for="last_name">Last Name</label>
              </div>
              <div class="input-field">
                <i class="material-icons prefix">
                <i class="fa fa-envelope"></i></i>
                <input type="email" id="email" v-model="email">
                <label for="email">Email Address</label>
              </div>
              <div class="input-field">
                <i class="material-icons prefix">
                <i class="fa fa-key"></i></i>
                <input type="password" id="password" v-model="password">
                <label for="password">Password</label>
              </div>
              <button
                v-on:click="validate"
                class="btn btn-large btn-extended grey lighten-4 black-text"
              >Register</button>
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
  name: "register",
  data: function() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    };
  },
  methods: {
    validate: function(email) {
    var re = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    if (re.test(this.email)) {
        if (this.email.indexOf('@ovphotography.co', this.email.length - '@ovphotography.co'.length) !== -1) {
            alert('Submission was successful.');
            firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            // console.log(user);
            alert(`Account Created for ${user.email}`);
            this.$router.go({ path: this.$router.path });
          },
          err => {
            alert(err.message);
          }
        );
      e.preventDefault();
        } else {
            alert('Email must be a OVPhotography e-mail address (your.name@ovphotography.co).');
        }
    } else {
        alert('Not a valid e-mail address.');
    }
    } ,
    register: function(e) {
      
    }
  } 
};
</script>
