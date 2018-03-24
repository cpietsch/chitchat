<template>
    <div class="chat">
      <div class="log">
        <div
          v-for="(entry, i) of log"
          :key="i"
          :class="['entry', entry.username === username ? 'highlight' : '']"
        >
          <span class="username">{{ entry.username }}:</span>
          <span class="message">{{ entry.message }}</span>
        </div>
      </div>
      <form @submit.prevent="handleSubmit">
        <input
          type="text"
          name="chatmessage"
          v-model="message"
          autocomplete="off"
          autocapitalize="off"
          autofocus
        />
      </form>
    </div>
</template>

<script>

export default {
  name: 'Chat',
  data: function () {
    return {
      message: ''
    }
  },
  computed: {
    username () { return this.$store.state.username },
    log () { return this.$store.getters.logReversed }
  },
  methods: {
    handleSubmit (e) {
      if (this.message.length === 0) return
      const msg = {
        username: this.username,
        message: this.message
      }
      this.$store.commit('addMessage', msg)
      this.message = ''
    }
  },
  created () {
    if (this.$store.state.username === '') {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
  .chat {
    height: 100vh;
  }

  .log {
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    max-height: calc(100vh - 65px);
    overflow: auto;
    display: flex;
    flex-direction: column-reverse;
    flex-grow: 1;
  }

  .username {
    opacity: 0.8;
    color: blue;
    padding-right: 3px;
  }
  .highlight .username {
    color: red;
  }

  .entry {
    padding-bottom: 5px;
  }

  input {
    width: calc(100% - 40px);
    position: absolute;
    margin: 20px;
    padding: 10px;
    border: none;
    bottom: 0px;
  }


</style>
