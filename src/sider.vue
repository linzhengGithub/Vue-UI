<template>
  <transition name="slide">
<!--    包住要做动画的div，取名-->
    <div class="sider" v-if="visible">
<!--      默认visible是true-->
      <slot></slot>
      <button @click="visible=false">close</button>
    </div>
  </transition>
</template>

<script lang="ts">
  export default {
    data(){
      return{
        visible:true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .sider{
    position: relative;
    > button{
      position: absolute;top: 0;right: 0;
    }
  }
  .slide-enter-active, .slide-leave-active{transition: all .3s;}
  .slide-enter, .slide-leave-to{margin-left: -200px;}
</style>