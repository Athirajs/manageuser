<template>
  <div>
    <Header />
    <form class="form-login">
      <div>
        <div class="input">
          <input type="text" placeholder="Name" v-model="user.name.first" />
        </div>
        <div class="input">
          <select v-model="user.gender">
            <option value="" disabled>Gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </div>
      </div>

      <div class="input">
        <input type="text" placeholder="Email" v-model="user.email" />
      </div>
      <div class="input">
        <input type="text" placeholder="Username" v-model="user.username" />
      </div>
      <div class="input">
        <input type="text" placeholder="Password" v-model="user.password" />
      </div>
      <div class="input">
        <input type="text" placeholder="DOB" v-model="user.dob" />
      </div>
      <div class="input">
        <input type="text" placeholder="Phone" v-model="user.phone" />
      </div>
      <div class="login-button">
        <button class="button" @click.prevent="addUser"><b>Add User</b></button>
      </div>
    </form>
  </div>
</template>
<script>
import Header from "./Header.vue";
export default {
  components: {
    Header,
  },
  data() {
    return {
      user: {
        username: "",
        gender: "",
        email: "",
        password: "",
        dob: "",
        phone: "",
        name: {
          first: "",
        },
      },
    };
  },
  methods: {
    addUser() {
      let users = [];
      if (localStorage.getItem("newUser") === null) {
        users = [];
      } else {
        users = JSON.parse(localStorage.getItem("newUser"));
      }
      users.push(this.user);
      localStorage.setItem("newUser", JSON.stringify(users));
    },
  },
  // watch: {
  //   user(newUser) {
  //     localStorage.newUser = newUser;
  //   },
  // },
};
</script>
<style scoped>
.container {
  margin: 100px auto;
  text-align: center;
  width: 396px;

  background: #fff;
  border-radius: 8px;
  float: none;
  color: #1c1e21;
  padding-bottom: 24px;
  padding-top: 10px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
}
.form-login {
  margin: 0;
  padding: 0;
  display: block;
}

div {
  display: block;
}

select,
input {
  background: #fff;
  color: #1c1e21;
  font-size: 17px;
  padding: 14px 16px;
  width: 330px;
  border-radius: 6px;
  background: #ffffff;
  border: 1px solid #dddfe2;
  color: #1d2129;
  margin-top: 16px;
}
.button {
  background: #1877f2;
  border: none;
  border-radius: 6px;
  font-size: 22px;
  line-height: 48px;
  padding: 0 16px;
  width: 364px;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  white-space: nowrap;
  color: #fff;
  margin-top: 16px;
}
.forget-account {
  margin-top: 16px;
}

.forget-account a {
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  color: #1877f2;
}

.hr {
  align-items: center;
  border-bottom: 1px solid #dadde1;
  display: flex;
  margin: 20px 16px;
  text-align: center;
}

.create-account {
  border: none;
  border-radius: 6px;
  font-size: 17px;
  line-height: 48px;
  padding: 0 16px;
  display: inline-block;
  background: #42b72a;
  color: #fff;
}
</style>
