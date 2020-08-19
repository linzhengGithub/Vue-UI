<template>
  <div class="tabs-pane" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  export default {
    data(){
      return{
        active:{
          type:Boolean,
          default:false
        }
      }
    },
    props:{
      name:{
        type: [String,Number],
        required:true
      }
    },
    computed:{
      classes(){
        return{
          active:this.active
        }
      }
    },
    inject:['eventBus'],//注入eventBus（爷爷组件tabs给的eventBus）
    created(){
      this.eventBus.$on(
        'update:selected',
        (name)=>{
          this.active = name === this.name;//如果监听的事件的名字是this.name，那么this.active就为true
        })
    }
  };
</script>

<style lang="scss" scoped>
  .tabs-pane {
    padding: 1em;
    &.active{

    }
  }
</style>