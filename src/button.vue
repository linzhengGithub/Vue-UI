<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}"
          @click="$emit('click')">
<!--    @click="$emit('click')"这个button被点击就会触发click事件，在别的地方就可以在button上面直接写@click事件-->
<!--    设置一个动态的class,它接受一个icon-position='right/left',因为这个${iconPosition}变量为right/left时都为true,当为true时,条件成立,进入CSS样式">-->
    <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
<!--    此处icon是button的icon的值，:name="icon"加上:里面的icon为一个变量，等着button上面传的icon;v-if如果g-icon上面的值为icon并且不等于loading，就成立-->
    <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
<!--    v-if如果g-icon上面有loading属性并把值给对了，就出现loading图标-->
    <div class="content">
      <slot/>
    </div>
  </button>
</template>
<script lang="ts">
  import Vue from 'vue'
  import Icon from './icon'
  Vue.component('g-icon',Icon)
  export default {
    // props:['icon','iconPosition'] //这个组件的props接受2个外部属性
    props:{
      icon:{},
      loading:{
        //给g-button一个loading值，类型为布尔，默认值是false
        type: Boolean,
        default: false,
      },
      iconPosition:{
        type: String, //接受的值是字符串
        default: 'left', //默认是left
      }
    }
  };
</script>
<style lang="scss" scoped>
  .g-button {font-size: var(--font-size);height: var(--button-height);padding: 0 1em;
    border-radius: var(--border-radius);border: 1px solid var(--border-color);background: var(--button-bg);
    display: inline-flex;//并称一列可以在元素上设置高度等
    justify-content: center;//纵向居中对齐
    align-items: center;//横向居中对齐
    vertical-align: middle;//解决display: inline-flex的bug，让自己和外部的对其
    &:hover {border-color: var(--border-color-hover);}
    &:active {border-color: var(--button-active-bg);}
    &:focus {outline: none;}
    > .content{order: 2;}//当icon-position没有给属性的时候 或者 icon-position="left"，<slot>在右边
    >.icon{order: 1; margin-right: 0.1em;}//icon图标在左边
    &.icon-right{//当icon-position="right"时
      >.content{order: 1;}//content的层级为1，<slot>在左边
      >.icon{order: 2; margin-right: 0; margin-left: 0.1em;}//order的层级为2，icon图标在右边
    }
    .loading{animation: spin 1s infinite linear;} //添加动画spin 1s 无限循环 线性
  }
  @keyframes spin {
    0%{transform: rotate(0deg);} 100%{transform: rotate(360deg);}
  }
</style>