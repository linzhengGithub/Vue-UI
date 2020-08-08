<template>
  <div class="tabs">
    <slot/>
  </div>
</template>

<script lang="ts">
  export default {
    props:{
      selected:<String>{//因为要改变子组件不能直接改变要从父组件上面改变
        required:true
      },
      direction:<String>{//tabs的 横向 和 纵向
        default:'horizontal',
        validator(value){
          return ['horizontal','vertical'].indexOf(value) >= 0
        }
      }
    },
    created(): void {
      // this.$emit('update:selected','xxx') 只有在某一时候触发这个事件，selected.sync才有用
    }
  };
</script>

<style lang="scss" scoped>
  .tabs {}
</style>