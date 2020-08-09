<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="action-wrapper">
      <slot name="action"></slot>
    </div>
<!--    附加slot（附加操作）-->
  </div>
</template>

<script lang="ts">
  export default {
    inject:['eventBus'],//注入eventBus（爷爷组件tabs给的eventBus）
    created(): void {}
  };
</script>

<style lang="scss" scoped>
  $tab-height:40px;
  .tabs-head {
    display: flex;
    justify-content: center;
    align-items: center;
    height: $tab-height;
    > .action-wrapper{
      margin-left: auto;
    }
  }
</style>