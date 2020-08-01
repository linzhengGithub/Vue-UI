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
      span:{type:[Number,String]},
      offset:{type:[Number,String]},
      ipad:{type: Object,validator,}, narrowPc:{type: Object,validator,}, pc:{type: Object,validator,}, widePc:{type: Object,validator,},
    },
    data(){return{gutter: 0}},
    methods:{
      createClasses(obj,str = ''){ //接受2个参数
        if(!obj){return []} //如果没有的话就就return []
        let array = [] //生成一个数组
        if (obj.span){array.push(`col-${str}${obj.span}`)} //如果有span那么就push进[]
        if (obj.offset){array.push(`offset-${str}${obj.offset}`)}
        return array; //返回出array
      }
    },
    computed: {//计算出来的值，一个变量变了，我也要变就用computed，就拿下面的gutter，是会变得，所以data不行，要用computed
      colClass(){
        let {span,offset,ipad,narrowPc,pc,widePc} = this
        let {createClasses} = this
        return [
          ...createClasses({span,offset}),
          ...createClasses(ipad,'ipad-'),//ipad是props，所以回被传一个对象{xxx:xxx}
          ...createClasses(narrowPc,'narrow-pc-'),
          ...createClasses(pc,'pc-'),
          ...createClasses(widePc,'wide-pc-'),
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
    @media (min-width: 577px){
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
    @media (min-width: 768px){
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
    @media (min-width: 992px) {
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
    @media (min-width: 1201px) {
      $class-prefix: col-wide-pc-;//class前缀
      @for $n from 1 through 24{
        &.#{$class-prefix}#{$n}{//scss的#和js的$同理
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-wide-pc-;//class前缀
      @for $n from 1 through 24{
        &.#{$class-prefix}#{$n}{//scss的#和js的$同理
          margin-left: ($n / 24) * 100%;
        }
      }
    }
  }
</style>