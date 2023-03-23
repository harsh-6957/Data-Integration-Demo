<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <h1>Author:{{ GetuserData }}</h1>
    <router-link :to="{ path: '/addusers/' + this.$route.params.id }"
      >Add post</router-link
    >
    <div class="row">
      <div class="col-sm-4">
        <div v-for="Alluser in Allusers" :key="Alluser.id" class="card">
          <div class="card-body">
            <h5 class="card-title">{{ Alluser.title }}</h5>
            <p class="card-text">{{ Alluser.body }}</p>
            <a href="#" class="btn btn-primary">Comments</a>
          </div>
        </div>
        <div  class="card">
          <div class="card-body">
            <h5 class="card-title">{{ parseView.title }}</h5>
            <h5 class="card-title">{{ parseView.body }}</h5>
            <a href="#" class="btn btn-primary">Comments</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import Login from '@/components/Login.vue'
import axios from "axios";
export default {
  name: "HomeView",
  data() {
    return {
      Allusers: "",
      parseView:[]
    };
  },
  computed: {
    GetuserData() {
      let getItem = localStorage.getItem("name");
      return getItem;
    },
  },
  mounted() {
    let id = this.$route.params.id;
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((response)=>{
        let parsedata =  JSON.parse(localStorage.getItem("apiData"))
          this.Allusers =  response.data
          this.parseView = parsedata
      })
  },
};
</script>
