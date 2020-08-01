<template>
  <div class="col" :class="colClass" :style="colStyle">
      <slot></slot>
  </div>
</template>

<script lang="ts">
  let validator = (value) => {
    let keys = Object.keys(value) //得到对象里面的keys
    let vaild = true
    keys.forEach( (key) => { //遍历这些keys是不是数组里面的其中一个，如果是就执行，不是就报错
      if(['span','offset'].indexOf(key) < 0){
        vaild = false
      }
      return vaild
    })
  }
  export default {
    props:{
      span:{
        type:[Number,String]
      },
      offset:{
        type:[Number,String]
      },
      phone:{type: Object,validator,},
      ipad:{type: Object,validator,},
      narrowPc:{type: Object,validator,},
      pc:{type: Object,validator,},
      widePc:{type: Object,validator,},
    },
    data(){
      return{gutter: 0}
    },
    computed: {//计算出来的值，一个变量变了，我也要变就用computed，就拿下面的gutter，是会变得，所以data不行，要用computed
      colClass(){
        let {span,offset,phone,ipad,narrowPc,pc,widePc} = this
        return [
          span && `col-${span}`,
          offset && `offset-${offset}`,
          ...(phone && [`col-phone-${phone.span}`]),
          ...(ipad && [`col-ipad-${ipad.span}`]),
          ...(narrowPc && [`col-narrow-pc-${narrowPc.span}`]),
          ...(pc && [`col-pc-${pc.span}`]),
          ...(widePc && [`col-wide-pc-${widePc.span}`]),
        ]
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
    @media (max-width: 576px) {
      $class-prefix: col-phone-;//class前缀
      @for $n from 1 through 24{
        &.#{$class-prefix}#{$n}{//scss的#和js的$同理
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-phone-;//class前缀
      @for $n from 1 through 24{
        &.#{$class-prefix}#{$n}{//scss的#和js的$同理
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 577px) and (max-width: 768px) {
      $class-prefix: col-ipad-;//class前缀
      @for $n from 1 through 24{
        &.#{$class-prefix}#{$n}{//scss的#和js的$同理
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-ipad-;//class前缀
      @for $n from 1 through 24{
        &.#{$class-prefix}#{$n}{//scss的#和js的$同理
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 769px) and (max-width: 992px) {
      $class-prefix: col-narrow-pc-;//class前缀
      @for $n from 1 through 24{
        &.#{$class-prefix}#{$n}{//scss的#和js的$同理
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-narrow-pc-;//class前缀
      @for $n from 1 through 24{
        &.#{$class-prefix}#{$n}{//scss的#和js的$同理
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 993px) and (max-width: 1200px) {
      $class-prefix: col-pc-;//class前缀
      @for $n from 1 through 24{
        &.#{$class-prefix}#{$n}{//scss的#和js的$同理
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-pc-;//class前缀
      @for $n from 1 through 24{
        &.#{$class-prefix}#{$n}{//scss的#和js的$同理
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 1201px){
      $class-prefix: col-wipe-pc-;//class前缀
      @for $n from 1 through 24{
        &.#{$class-prefix}#{$n}{//scss的#和js的$同理
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-wipe-pc-;//class前缀
      @for $n from 1 through 24{
        &.#{$class-prefix}#{$n}{//scss的#和js的$同理
          margin-left: ($n / 24) * 100%;
        }
      }
    }
  }
</style>