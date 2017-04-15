<template>
  <div>
    <router-link :to="{ name: 'index' }">Go to Index page</router-link>
    <h1>login page</h1>
    <button @click="login()">LOG ME IN</button>
  </div>
</template>

<script>
import auth from '../services/auth'
export default {
  data () {
    return {}
  },
  methods: {
    login () {
      return auth.login()
    }
  }
}
</script>

<style>
</style>
