<template>
  <div class="container">
    <router-link :to="{ path: '/home/' + GetuserData }">All-posts</router-link>
    <div class="alert alert-success" v-if="activate" role="alert">
      Successfully the data is posted !
    </div>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Title</label>
        <input
          type="text"
          class="form-control"
          v-model="title"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <small id="emailHelp" class="form-text text-muted"
          >We'll never share your email with anyone else.</small
        >
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Body</label>
        <textarea
          type="text"
          v-model="body"
          class="form-control"
          id="exampleInputPassword1"
        ></textarea>
      </div>

      <button type="button" @click="submit()" class="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Addusers-item",
  data() {
    return {
      activate: false,
      showMessenge: null,
    };
  },
  computed: {
    GetuserData() {
      console.log("this.$route.params.id", this.$route.params.id);
      let getItem = localStorage.getItem("id");
      return getItem;
    },
  },
  methods: {
    submit() {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          body: JSON.stringify({
            title: this.title,
            body: this.body,
            userId: 1,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
        .then((response) => {
          console.table(response.data);
          localStorage.setItem("apiData", JSON.stringify(response));

          // response.json()
        })
        .then((json) => {
          console.log("ddd", json);
          // localStorage.setItem("apiData", json);
          this.activate = true;
          setTimeout(() => {
            this.activate = false;
          }, 2000);
        });
    },
  },
};
</script>

<style></style>
