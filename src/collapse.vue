<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  export default {
    props: {
      single: <Boolean>{default: false},
      selected: <Array<string>>{}//数组
    },
    data() {
      return {eventBus: new Vue()};
    },
    provide() {
      return {eventBus: this.eventBus};
    },
    mounted(): void {
      this.eventBus.$emit('update:selected', this.selected);//告诉儿子们，'update:selected'的变化，this.selected被选中
      this.eventBus.$on('update:addSelected',(name)=>{//监听'update:addSelected'（用户想要）
        let selectedCopy = JSON.parse(JSON.stringify(this.selected))//深拷贝最开始this.selected的值
        if (this.single){//如果this.single存在，为true
          selectedCopy = [name]//那么就直接把name的值赋给selectedCopy
        }else{//如果不存在，为false
          selectedCopy.push(name)//那么就往里面添加东西
        }
        this.eventBus.$emit('update:selected', selectedCopy);//告诉儿子，selectedCopy的值是什么
        this.$emit('update:selected',selectedCopy) //本身组件触发'update:selected'事件,和外部同步
      })
      this.eventBus.$on('update:removeSelected',(name)=>{////监听'update:removeSelected'（用户想要）
        let selectedCopy = JSON.parse(JSON.stringify(this.selected))//深拷贝最开始this.selected的值
        let index = selectedCopy.indexOf(name)//计算name在selectedCopy里面的索引
        selectedCopy.splice(index,1)//从selectedCopy里面删除这个值
        this.eventBus.$emit('update:selected', selectedCopy);//告诉儿子，selectedCopy的值是什么
        this.$emit('update:selected',selectedCopy) //本身组件触发'update:selected'事件,和外部同步
      })
    }
  };
</script>
<style lang="scss" scoped>
  $grey: grey;
  $border-radius: 4px;
  .collapse {
    border: 1px solid $grey;
    border-radius: $border-radius;
  }
</style>