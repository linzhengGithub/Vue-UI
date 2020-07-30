<template>
  <div class="col" :class="[span && `col-${span}`,offset && `offset-${offset}`]"
       :style="{paddingLeft: gutter/2+'px',paddingRight: gutter/2+'px'}">
    <div style="border: 1px solid green;height: 100px">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    props:{
      span:{
        type:[Number,String]
      },
      offset:{
        type:[Number,String]
      }
    },
    data(){
      return{
        gutter: 0
      }
    },
    created(): void {},
    mounted(): void {}
  }
  var div = document.createElement('div')
  var childDiv = document.createElement('div')
  div.appendChild(childDiv)
  document.body.appendChild(div)
</script>

<style lang="scss" scoped>
  .col{
    height: 100px;
    width: 50%;
    $class-prefix: col-;//class前缀
    @for $n from 1 through 24{
      &.#{$class-prefix}#{$n}{//scss的#和js的$同理
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-;//class前缀
    @for $n from 1 through 24{
      &.#{$class-prefix}#{$n}{//scss的#和js的$同理
        margin-left: ($n / 24) * 100%;
      }
    }
  }
</style>