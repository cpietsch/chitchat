<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'app',
    components: {
    },
    mounted () {
      this.$store.dispatch('generateFakeMessages')
      this.$store.dispatch('generateFakeMessageWithRandomTimeout')
    }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono');

  *, *:before, *:after {
      box-sizing: border-box;
  }
  *:focus {
      outline: none;
  }
  html, body {
    padding: 0;
    margin: 0;
    background: #f4f4f4;
  }

  input, button {
    font-family: 'IBM Plex Mono', Helvetica, Arial, sans-serif;
    font-size: 14px;
  }

  .app {
    font-family: 'IBM Plex Mono', Helvetica, Arial, sans-serif;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
  }
</style>
