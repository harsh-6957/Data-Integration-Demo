<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div class="container">
      <h1>Author:{{ GetuserData }}</h1>
    <router-link :to="{ path: '/addusers/' + this.$route.params.id }"
      >Add post</router-link
    >
    <div class="card">
      <div class="card-header">Filtered posted Data</div>
      <div v-for="Userlists in Userlist" :key="Userlists.id" class="card-body">
        <h5 class="card-title">{{ Userlists.title }}</h5>
        <p class="card-text">{{ Userlists.body }}</p>
        <a href="#" @click="Checkcomments(Userlists.id)" class="btn btn-primary"
          >comments</a
        >
      </div>
    </div>
    <div v-for="Alluser in parseView" :key="Alluser.userId" class="card">
      <div class="card-body">
        <h5 class="card-title">{{ Alluser }}</h5>
        <a href="#" class="btn btn-primary">Comments</a>
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
      Userlist: "",
      parseView: "",
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
      .then((response) => {
        let parsedata = JSON.parse(localStorage.getItem("apiData"));
        this.Userlist = response.data;
        this.parseView = parsedata.data;
      });
  },
  methods: {
    Checkcomments(e) {
      console.log(e);
      this.$router.push({ name: "CommentsList", params: { id: e } });
    },
  },
};
</script>
