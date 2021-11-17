<template>
  <Header />
  <div v-if="!isLoading">
    <User />
  </div>
  <div v-if="isLoading">
    <h3>Loading....</h3>
  </div>
</template>
<script>
import Header from "./Header.vue";
import User from "./User.vue";
export default {
  name: "Home",
  components: {
    Header,
    User,
  },
  data() {
    return {
      isLoading: false,
    };
  },
};
</script>
