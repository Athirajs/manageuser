<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/AddUser">Add User</router-link>

    <a @click="logout" href="#">Logout</a>
  </div>
</template>
<script>
export default {
  name: "Header",
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
<style scoped>
.nav {
  background: #333;
  padding: 20px 10px;
}
.nav a {
  color: #fff;
  text-decoration: none;
  padding-left: 20px;
  font-size: 20px;
}
.nav a:hover {
  background: #555;
}
</style>
