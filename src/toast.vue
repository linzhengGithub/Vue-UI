<template>
  <div class="toast">
    <slot/>
  </div>
</template>

<script lang="ts">

  export default {

  }
</script>

<style lang="scss" scoped>
  $font-size:14px;
  $toast-height:40px;
  $toast-bg:rgba(0,0,0,0.75);
  .toast{
    position: fixed;top: 0;left: 50%;transform: translateX(-50%);line-height: 1.8;
    color: white;display: flex;align-items: center;
    background: $toast-bg;border-radius: 4px;padding: 0 16px;
    box-shadow: 0 0 3px 0 rgba(0,0,0,0.50);
  }
</style>