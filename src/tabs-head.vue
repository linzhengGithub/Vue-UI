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
    mounted(): void {
      this.eventBus.$on('update:selected',(item, vm) => {//点击的时候再传一个vm，然后拿到vm实例元素
        let {width,left} = vm.$el.getBoundingClientRect()//获取这个div元素的width和left
        this.$refs.line.style.width = `${width}px`;//把获取的元素的width赋给line
        this.$refs.line.style.left = `${left}px`;//把获取的元素的left赋给line
      })
    }
  };
</script>

<style lang="scss" scoped>
  $tab-height:40px;$blue:blue;
  .tabs-head {
    display: flex;height: $tab-height;position: relative;
    border-bottom: 1px solid #ddd;
    > .line{
      position: absolute;border-bottom: 1.5px solid $blue;bottom: 0;
      transition: all 300ms;
    }
    > .action-wrapper{
      margin-left: auto;display: flex;align-items: center;padding: 0 1em;
    }
  }
</style>