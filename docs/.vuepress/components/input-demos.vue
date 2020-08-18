<template>
  <div>
    <g-input value="中文"></g-input>
    <g-input value="中文" disabled></g-input>
    <g-input value="中文" readonly></g-input>
  </div>
</template>

<script lang="ts">
import Input from '../../../src/input'
  export default
  {
    components:{
      'g-input': Input
    }
  }
</script>
