<template>
  <div>
    <main-layout>
      <router-link :to="{ name: 'hello' }">Go to Hello page</router-link>
      <router-link :to="{ name: 'protected' }">Go to Protected page</router-link>
      <h1>indx page!</h1>

      <h2 slot="footer">goes into the footer!</h2>

      <h2 slot="header">goes into the header!</h2>

    </main-layout>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="styl">
</style>
