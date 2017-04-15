<template>
  <div>
    <main-layout>
      <router-link :to="{ name: 'index' }">Go to Index page</router-link>
      <router-link :to="{ name: 'protected' }">Go to Protected page</router-link>
      <h1>I am hello!</h1>
      <button @click="fetchPickups()">Click me, oh click me</button>
      <div class="list">
        <div class="item" v-for="pickup in pickups">
          <div class="item-content">
            {{ pickup.storeName }}<br>
            Date: {{ pickup.date }}
          </div>
        </div>
      </div>
    </main-layout>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      pickups: []
    }
  },
  methods: {
    fetchPickups () {
      return axios.get('/statics/api/pickups.json').then(({ data }) => {
        this.pickups = data.entries
      })
    }
  }
}
</script>

<style>
</style>
