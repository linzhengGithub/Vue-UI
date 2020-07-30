<template>
  <div class="col" :class="[`col-${span}`]">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  export default {
    props:{
      span:{
        type:[Number,String]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .col{
    height: 100px;
    background: grey;
    width: 50%;
    border: 1px solid red;
    $class-prefix: col-;//class前缀
    @for $n from 1 through 24{
      &.#{$class-prefix}#{$n}{//scss的#和js的$同理
        width: ($n / 24) * 100%;
      }
    }
  }
</style>