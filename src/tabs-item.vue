<template>
  <div class="tabs-item" @click="xxx">
    <slot/>
  </div>
</template>

<script lang="ts">
  export default {
    props:{
      disabled:<Boolean>{//禁用
        default:false
      },
      name:<String|Number>{
        required:true
      }
    },
    inject:['eventBus'],//注入eventBus（爷爷组件tabs给的eventBus）
    created(): void {
      this.eventBus.$on(
        'update:selected',//监听selected事件
        (name)=>{console.log(name);})
    },
    methods:{
      xxx(){
        this.eventBus.$emit('update:selected',this.name)
        //虽然'update:selected'是一样的，但是不一定是在同一个组件执行的，有的可能值执行上面的，有的可能只执行下面的，所以两个name也可能不一样
      }
    }
  };
</script>

<style lang="scss" scoped>
  $tab-height:40px;
  .tabs-item {
    border: 1px solid green;
    line-height: $tab-height;
    padding: 0 1em;
  }
</style>