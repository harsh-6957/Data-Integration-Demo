import { createStore } from 'vuex'

export default createStore({
  state: {
    api: "https://jsonplaceholder.typicode.com",
    posts: null,
    post: {},
    userLogin: {
      name: "",
      id: "",
    },
  },
  getters: {
  },
  mutations: {
    setUserLogin(state, value) {
      state.userLogin.name = value.name;
      state.userLogin.id = value.id;
    },
  },
  actions: {
    fetchUserByEmail(context, email) {
      return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/users?email=${email}`)
          .then((response) => {
            if (response.status === 200) {
              return response.json();
            } else {
              reject({ err: "Tài khoản không tồn tại" });
            }
          })
          .then((json) => {
            let user = { name: json[0].name, id: json[0].id };
            resolve(user);
          })
          .catch((err) => {
            reject({ err });
          });
      });
    },
  },
  modules: {
  }
})
