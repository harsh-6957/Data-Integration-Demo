<template>
  <div class="container">
    <div class="card">
      <div class="card-header">All posted Data</div>
      <div v-for="Lists in List" :key="Lists.id" class="card-body">
        <h5 class="card-title">{{ Lists.title }}</h5>
        <p class="card-text">{{ Lists.body }}</p>
        <a href="#" @click="Checkcomments(Lists.id)" class="btn btn-primary"
          >comments</a
        >
      </div>
    </div>
    <input
          type="email"
          class="form-control"
          v-model="email"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Addusers-item",
  data() {
    return {
      List: "",
    };
  },

  mounted() {
    //   let id = this.$route.params.id
    axios
      .get(`http://jsonplaceholder.typicode.com/posts`)
      .then((response) => (this.List = response.data));
  },
  methods: {
    Checkcomments(e) {
      console.log(e);
      this.$router.push({ name: "CommentsList", params: { id: e } });
    },
  },
};
</script>

<style></style>
