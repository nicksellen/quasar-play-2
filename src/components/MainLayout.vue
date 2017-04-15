<template>
  <div>
    <strong>header</strong>
    <slot name="header"></slot>
    <hr>
    <slot></slot>
    <hr>
    <strong>footer</strong>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
