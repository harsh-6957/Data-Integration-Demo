<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-4">
        <div v-for="Alluser in Allusers" :key="Alluser.id" class="card">
          <div class="card-body">
            <h5 class="card-title">{{ Alluser.title }}</h5>
            <p class="card-text">{{ Alluser.body }}</p>
            <a
              href="#"
              @click="Checkcomments(Alluser.id)"
              class="btn btn-success"
              >comments</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Getusers-item",
  data() {
    return {
      Alluser: "",
    };
  },
  methods: {
    Checkcomments(e) {
      console.log(e);
      this.$router.push({
        name: "CommentsList",
        params: { id: this.$route.params.id },
      });
    },
  },
  mounted() {
    let id = this.$route.params.id;
    axios
      .get(`http://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => console.log("response", response));
  },
};
</script>

<style></style>
