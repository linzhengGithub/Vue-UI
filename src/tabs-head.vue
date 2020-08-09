<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="action-wrapper"></div>
    <slot name="action"></slot>
<!--    附加slot（附加操作）-->
  </div>
</template>

<script lang="ts">
  export default {
    inject:['eventBus'],//注入eventBus（爷爷组件tabs给的eventBus）
    created(): void {

    }
  };
</script>

<style lang="scss" scoped>
  $tab-height:40px;
  .tabs-head {
    display: flex;
    border: 1px solid red;
    justify-content: center;
    align-items: center;
    height: $tab-height;
    > .action-wrapper{
      margin-left: auto;
    }
  }
</style>