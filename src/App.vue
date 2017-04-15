<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <pre>logged in: {{ auth.authenticated }}</pre>
    <button v-if="auth.authenticated" @click="logout()">logout</button>
    <router-view></router-view>
  </div>
</template>

<script>
import auth from './services/auth'
export default {
  data () {
    return {
      auth: auth.state
    }
  },
  methods: {
    logout () {
      return auth.logout()
    }
  }
}
</script>

<style></style>
