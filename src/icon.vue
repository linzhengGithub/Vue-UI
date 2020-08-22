<template>
    <svg class="g-icon">
      <use :xlink:href="`#i-${name}`"></use>
<!--      ${name}为一个变量，等组件传一个name="xxx"-->
    </svg>
</template>

<script lang="ts">
  import './svg'
  export default  {
    name: 'GuluIcon',
    props: {
      name:{}
    }
  }
</script>

<style lang="scss" scoped>
  .g-icon {
    width: 1em;
    height: 1em;
  }
</style>