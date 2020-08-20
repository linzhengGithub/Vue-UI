<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'GuluTabsBody',
    inject:['eventBus'],//注入eventBus（爷爷组件tabs给的eventBus）
    created(){}
  };
</script>

<style lang="scss" scoped>
  .tabs-body {}
</style>