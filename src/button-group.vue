<template>
  <div class="g-button-group"><slot/></div>
  <!--  因为<slot/>只能识别单个，如果需要多个，就要用div包起来-->
</template>
<script lang="ts">
  export default {
    //mounted()是一个在页面加载的时候就会完成的函数
    mounted(): void {
      //遍历这个组件下面的子元素【$el(是element).children就是元素的孩子】
      for (let node of this.$el.children){
        let name = node.nodeName.toLowerCase()
        if(name !== 'button'){console.warn(`g-button-group的子元素应该全是g-button，你这里有一个${name}`)//``反单引号是ES6的写法
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .g-button-group{
    display: inline-flex;vertical-align: middle;
    > .g-button{
      border-radius: 0;
      //不是第一个
      &:not(:first-child){margin-left: -1px;}
      //第一个
      &:first-child{border-top-left-radius: var(--border-radius);border-bottom-left-radius: var(--border-radius);}
      //最后一个
      &:last-child{border-top-right-radius: var(--border-radius);border-bottom-right-radius: var(--border-radius);}
      &:hover{position: relative;z-index: 1;}
    }
  }
</style>