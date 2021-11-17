<template>
  <div>
    <input
      type="text"
      class="search"
      v-model="search"
      placeholder="Serach username"
    />
    <table border="1">
      <tr class="header">
        <td>gender</td>
        <td>Name</td>
        <td>email</td>
        <td>Username</td>
        <td>Password</td>
        <td>DOB</td>
        <td>Phone</td>
      </tr>

      <tr v-for="user in filteredList" :key="user.id">
        <td>{{ user.user.gender }}</td>
        <td>{{ user.user.name.first }} {{ user.user.name.last }}</td>
        <td>{{ user.user.email }}</td>
        <td>{{ user.user.username }}</td>
        <td>{{ user.user.password }}</td>
        <td>{{ user.user.dob }}</td>
        <td>{{ user.user.phone }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "User",
  components: {},
  data() {
    return {
      users: [],
      search: "",
    };
  },
  async mounted() {
    // let user = localStorage.getItem("user-info");
    // this.name = JSON.parse(user).username;

    let data = await axios.get("https://randomuser.me/api/0.8/?results=20");
    // console.log(data);

    localStorage.setItem("usersData", JSON.stringify(data.data.results));

    // this.users = results;
    // console.warn(results, "results");
  },
  computed: {
    filteredList() {
      let results = JSON.parse(localStorage.getItem("usersData"));

      return results.filter((user) => {
        return user.user.username.includes(this.search);
      });
    },
  },
};
</script>
<style scoped>
tr.header {
  font-weight: bold;
  font-size: 18px;
}
td {
  width: 160px;
  height: 40px;
}
.search {
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
</style>
