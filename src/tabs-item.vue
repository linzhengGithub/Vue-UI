<template>
  <div class="tabs-item">
    <slot/>
  </div>
</template>

<script lang="ts">
  export default {
    props:{
      disabled:<Boolean>{//禁用
        default:false
      }
    }
  };
</script>

<style lang="scss" scoped>
  .tabs-item {}
</style>