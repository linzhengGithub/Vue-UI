<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot/>
  </div>
</template>
<script lang="ts">
  export default {
    props: {
      gutter: {
        type: [Number, String]
      },
      align: {
        type: String,
        validator(value){return ['left','right','center'].includes(value)}//检查器，检查align的值是不是这个数组里面的值
      }
    },
    computed:{
      rowStyle(){return {marginLeft: -this.gutter/2+'px', marginRight: -this.gutter/2+'px'}},
      rowClass(){
        let {align} = this
        return [align && `align-${align}`]
      }
    },
    mounted(){
      this.$children.forEach((vm) => { //在row这个div下面的孩子，把vm遍历出来，如果row上面有gutter，就加上gutter
        vm.gutter = this.gutter
      })
    },
  };
</script>
<style lang="scss" scoped>
  .row {
    display: flex;margin: 0 -10px;
    &.align-left{justify-content: start;}
    &.align-right{justify-content: flex-end;}
    &.align-center{justify-content: center;}
  }
</style>