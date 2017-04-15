<template>
  <div>
    <router-link :to="{ name: 'index' }">Go to Index page</router-link>
    <router-link :to="{ name: 'hello' }">Go to Hello page</router-link>
    <h1>I am protected!</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style>
</style>
