<template>
  <div class="tabs-head">
    <slot></slot>
    <slot name="action"></slot>
<!--    附加slot（附加操作）-->
  </div>
</template>

<script lang="ts">
  export default {};
</script>

<style lang="scss" scoped>
  .tabs-head {}
</style>