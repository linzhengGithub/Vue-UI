<template>
  <div class="tabs-pane">
    <slot/>
  </div>
</template>

<script lang="ts">
  export default {
    inject:['eventBus'],//注入eventBus（爷爷组件tabs给的eventBus）
    created(): void {
      this.eventBus.$on('update:selected',(name)=>{console.log(name);})
    }
  };
</script>

<style lang="scss" scoped>
  .tabs-pane {}
</style>