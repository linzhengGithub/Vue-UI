<template>
  <div class="tabs-item" @click="xxx" :class="classes">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  export default {
    data(){
      return{
        active:<Boolean>false //设置active
      }
    },
    props:{
      disabled:<Boolean>{//禁用
        default:false
      },
      name:<String|Number>{
        required:true
      }
    },
    computed:{
      classes(){
        return{//如果一个item被选中classes就变成active
          active:this.active
        }
      }
    },
    inject:['eventBus'],//注入eventBus（爷爷组件tabs给的eventBus）
    created(): void {
      this.eventBus.$on(
        'update:selected',//监听selected事件
        (name)=>{
          this.active = name === this.name;//如果监听的事件的名字是this.name，那么this.active就为true
        })
    },
    methods:{
      xxx(){
        this.eventBus.$emit('update:selected',this.name,this)//告诉组件上下，this.name被点击了,再传一个this，点击的时候传元素过去
        //虽然'update:selected'是一样的，但是不一定是在同一个组件执行的，有的可能值执行上面的，有的可能只执行下面的，所以两个name也可能不一样
      }
    }
  };
</script>

<style lang="scss" scoped>
  $tab-height:40px;$blue:blue;
  .tabs-item {
    display: flex;justify-content: center;align-items: center;
    padding: 0 1em;cursor: pointer;
    &.active{
      color: $blue;font-weight: bold;
    }
  }
</style>