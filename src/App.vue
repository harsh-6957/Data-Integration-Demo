<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |   <router-link to="/login">Login</router-link>
<router-link to="/getusers/:id"> <br>Hi,{{ GetuserData }}</router-link>
<!-- <button  @click="destroyLocal()" > <br>Logout</button> -->
  </nav>
  <router-view/>
</template>
<script>
export default {
  computed:{
    GetuserData(){
      let getItem = localStorage.getItem("name");
      return getItem
    },
  },
    methods:{
      destroyLocal(){
        localStorage.clear();      }
    
  }}
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
