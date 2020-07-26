<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}">
<!--    设置一个动态的class,它接受一个icon-position='right/left',因为这个${iconPosition}变量为right/left时都为true,当为true时,条件成立,进入CSS样式">-->
    <svg v-if="icon" class="icon">
      <use :xlink:href=`#i-${icon}`></use>
    </svg>
    <div class="content">
      <slot/>
    </div>
  </button>
</template>
<script lang="ts">
  export default {props:['icon','iconPosition'] //这个组件的props接受2个外部属性
  };
</script>
<style lang="scss" scoped>
  .g-button {font-size: var(--font-size);height: var(--button-height);padding: 0 1em;
    border-radius: var(--border-radius);border: 1px solid var(--border-color);background: var(--button-bg);
    display: inline-flex;//并称一列可以在元素上设置高度等
    justify-content: center;//纵向居中对齐
    align-items: center;//横向居中对齐
    vertical-align: middle;//解决display: inline-flex的bug
    &:hover {border-color: var(--border-color-hover);}
    &:active {border-color: var(--button-active-bg);}
    &:focus {outline: none;}
    > .content{order: 2;}//当icon-position没有给属性的时候 或者 icon-position="left"，<slot>在右边
    >.icon{order: 1; margin-right: 0.1em;}//icon图标在左边
    &.icon-right{//当icon-position="right"时
      >.content{order: 1;}//content的层级为1，<slot>在左边
      >.icon{order: 2; margin-right: 0; margin-left: 0.1em;}//order的层级为2，icon图标在右边
    }
  }
</style>