<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  export default {
    inject:['eventBus'],//注入eventBus（爷爷组件tabs给的eventBus）
    created(): void {}
  };
</script>

<style lang="scss" scoped>
  .tabs-body {}
</style>