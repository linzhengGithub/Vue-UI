<template>
  <div class="layout" :class="layoutClass">
    <slot/>
  </div>
</template>
<script lang="ts">
  export default {
    data(){
      return{
        layoutClass: {hasSider: false}
      }
    },
    mounted(): void {
      this.$children.forEach((vm)=>{ //遍历layout下面的子节点
        if(vm.$options.name === 'g-sider'){   //找出每个子节点的名字，如果等于g-sider那就让layoutClass.hasSider
          this.layoutClass.hasSider = true
        }
      })
    }
  }
</script>
<style lang="scss" scoped>
  .layout{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    &.hasSider{
      flex-direction: row;
    }
  }
</style>