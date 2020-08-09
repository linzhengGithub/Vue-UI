<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue'
  export default {
    props:{
      selected:<String>{//因为要改变子组件不能直接改变要从父组件上面改变
        required:true
      },
      direction:<String>{//tabs的 横向 和 纵向
        default:'horizontal',
        validator(value){return ['horizontal','vertical'].indexOf(value) >= 0}
      }
    },
    data(){
      return{
        eventBus:new Vue() //让eventBus成为一个Vue实例（把eventBus:Vue加到this上去,让event成为一个含有Vue属性的对象）
      }
    },
    provide(){
      return{
        eventBus: this.eventBus //provide里面的eventBus是引用实例里面的eventBus,只有provide了eventBus才能给子组件注入inject
      }
    },
    mounted(): void {
      this.eventBus.$emit('update:selected',this.selected) //告诉所有子孙，this.selected被选中了(广播了事件)
      // this.$emit('update:selected','xxx') 只有在某一时候触发这个事件，selected.sync才有用
    }
  };
</script>
<style lang="scss" scoped>
  .tabs {}
</style>