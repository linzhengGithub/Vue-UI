<template>
  <div class="row" :style="{marginLeft: -gutter/2+'px',marginRight: -gutter/2+'px'}">
    <slot/>
  </div>
</template>

<script lang="ts">
  export default {
    props: {
      gutter: {
        type: [Number, String]
      }
    },
    created(): void {

    },
    mounted(){
      console.log(this.$children);
      this.$children.forEach((vm) => {
        vm.gutter = this.gutter
      })
    },
  };
</script>

<style lang="scss" scoped>
  .row {
    display: flex;
    margin: 0 -10px;
  }
</style>