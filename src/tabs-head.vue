<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="action-wrapper">
      <slot name="action"></slot>
    </div>
<!--    附加slot（附加操作）-->
  </div>
</template>

<script lang="ts">
  export default {
    inject:['eventBus'],//注入eventBus（爷爷组件tabs给的eventBus）
    created(): void {
      this.eventBus.$on('update:selected',(item)=>{console.log(item);})
    }
  };
</script>

<style lang="scss" scoped>
  $tab-height:40px;$blue:blue;
  .tabs-head {
    display: flex;height: $tab-height;position: relative;
    > .line{
      position: absolute;border-bottom: 1px solid $blue;bottom: 0;width: 40px;
    }
    > .action-wrapper{
      margin-left: auto;
    }
  }
</style>