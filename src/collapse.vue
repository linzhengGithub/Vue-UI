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
      selected: <String>{}
    },
    data() {
      return {eventBus: new Vue()};
    },
    provide() {
      return {eventBus: this.eventBus};
    },
    mounted(): void {
      this.eventBus.$emit('update:selected', this.selected);
      this.eventBus.$on('update:selected',(name)=>{
        this.$emit('update:selected',name) //本身触发事件
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