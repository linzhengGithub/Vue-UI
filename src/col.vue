<template>
  <div class="col" :class="colClass" :style="colStyle">
      <slot></slot>
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
      return{gutter: 0}
    },
    computed: {//计算出来的值，一个变量变了，我也要变就用computed，就拿下面的gutter，是会变得，所以data不行，要用computed
      colClass(){
        let {span,offset} = this
        return [span && `col-${span}`, offset && `offset-${offset}`]
      },
      colStyle(){
        return{paddingLeft: this.gutter/2+'px', paddingRight: this.gutter/2+'px'}
      }
    }
  }
</script>

<style lang="scss" scoped>
  .col{
    border: 1px solid red;
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