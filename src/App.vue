<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link v-if="loginActive" to="/login">Login</router-link> |
    <router-link @click="removeAccount" v-if="loginActive" to="/login"
      >Logout</router-link
    >
    <!-- <router-link to="/getusers/:id"> <br />{{ GetuserData }}</router-link> -->
    <!-- <button  @click="destroyLocal()" > <br>Logout</button> -->
    <router-view />
  </nav>
</template>
<script>
export default {
  data() {
    return {
      loginActive:true,
      logout: true,
    };
  },
  computed: {
    GetuserData() {
      let getItem = localStorage.getItem("name");
      return getItem;
    },
  },
  methods: {
    
    removeAccount() {
      this.logout = false;
      localStorage.removeItem("name");
      localStorage.removeItem("apiData");
      // localStorage.clear();
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
