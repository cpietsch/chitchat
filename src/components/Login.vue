<template>
    <div class="login">
      <div class="typer">
        <vue-typer :text="welcomeText"></vue-typer>
      </div>
      <!-- <h3>Welcome to chitchat</h3> -->
      <form @submit.prevent="handleSubmit">
        <input
          type="text"
          name="username"
          placeholder="enter your nickname"
          v-model="username"
          autocomplete="off"
          autocapitalize="off"
        />
        <button
          type="submit"
          :disabled="username.length < 3"
        >
          Login
        </button>
      </form>
    </div>
</template>

<script>
import { VueTyper } from 'vue-typer'

export default {
  name: 'Login',
  components: { VueTyper },
  computed: {
    welcomeText: () => ['welcome to chitchat', 'where your dreams become reality', 'or not']
  },
  data: function () {
    return {
      username: ''
    }
  },
  methods: {
    handleSubmit (e) {
      if (this.username.length < 3) return
      this.$store.commit('setUsername', this.username)
      this.$router.push('/chat')
    }
  }
}
</script>

<style scoped>
  .login {
    padding: 20px;
  }
  .typer {
    padding-bottom: 40px;
    font-size: 18px;
  }
  h3 {
    text-transform: uppercase;
    font-size:30px;
  }
  input {
    width: calc(100% - 110px);
    font-size: 14px;
    padding: 10px;
    border: none;
    margin-bottom: 10px;
  }
  button {
    background: #FFF;
    padding: 10px;
    border: none;
    width: 100px;
  }
  button:disabled {
    opacity: 0.3;
  }
</style>
