<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}"
          @click="$emit('click')">
<!--    可以在button上面直接写click事件-->
    <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
    <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script lang="ts">
  import Vue from 'vue'
  import Icon from './icon'
  Vue.component('g-icon',Icon)
  export default {
    props:{
      icon:{},
      loading:{
        type: Boolean,
        default: false,
      },
      iconPosition:{
        type: String,
        default: 'left',
      }
    }
  };
</script>
<style lang="scss" scoped>
  $font-size:14px;  $button-height:32px;  $button-bg:white;  $button-active-bg:#eee;
  $border-radius:4px;  $color:#333;  $border-color:#999;  $border-color-hover:#666;
  .g-button {font-size: $font-size;height: $button-height;padding: 0 1em;
    border-radius: $border-radius;border: 1px solid $border-color;background: $button-bg;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    &:hover {border-color: $border-color-hover;}
    &:active {border-color: $button-active-bg;}
    &:focus {outline: none;}
    > .content{order: 2;}
    >.icon{order: 1; margin-right: 0.1em;}
    &.icon-right{
      >.content{order: 1;}
      >.icon{order: 2; margin-right: 0; margin-left: 0.1em;}
    }
    .loading{animation: spin 1s infinite linear;}
  }
  @keyframes spin {
    0%{transform: rotate(0deg);} 100%{transform: rotate(360deg);}
  }
</style>