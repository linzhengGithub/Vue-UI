<template>
  <div class="row" :style="rowStyle">
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
    computed:{
      rowStyle(){
        return {
          marginLeft: -this.gutter/2+'px',
          marginRight: -this.gutter/2+'px'
        }
      }
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