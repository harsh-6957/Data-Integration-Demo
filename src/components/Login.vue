<template>
  <div class="container">
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          v-model="email"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <button type="button" @click="login()" class="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Login-item",
  data() {
    return {
      email: "",
      user: {},
    };
  },
  methods: {
    ...mapMutations(["setUserLogin"]),
    async login() {
      let _this = this;
      await _this.$store
        .dispatch("fetchUserByEmail", _this.email)
        .then((user) => {
          _this.user = user;
        })
        .catch(() => {
          _this.user = { err: "check error" };
        });
      if (!_this.user.err) {
        this.setUserLogin(_this.user);
        localStorage.setItem("name", _this.user.name);
        localStorage.setItem("id", _this.user.id);
        _this.$router.push({ name: "home" ,params:{id:  _this.user.id }});
      }
    },
  },
};
</script>

<style></style>
