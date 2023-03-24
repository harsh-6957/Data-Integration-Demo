<template>
  <div class="container">
    <div class="card">
        <router-link :to="{ path: '/home/' + this.$route.params.id }">All-posts</router-link>

      <div class="card-header">CommentsList</div>
      <div v-for="Lists in List" :key="Lists.id" class="card-body">
        <h5 class="card-title">{{ Lists.email }}</h5>
        <p class="card-text">{{ Lists.body }}</p>
        <!-- <a href="#" @click="Checkcomments(Lists.id)" class="btn btn-primary">comments</a> -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      List: "",
    };
  },
  mounted() {
    let id = this.$route.params.id;
    axios
      .get(`http://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then((response) => {
        this.List = response.data;
      });
  },
};
</script>

<style></style>
