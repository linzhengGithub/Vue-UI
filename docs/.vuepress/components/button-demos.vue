<template>
  <div style="padding-top: 16px">
    <h2>简单用法</h2>
    <h4>预览</h4>
    <g-button>默认按钮</g-button>
    <h4>代码</h4>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>

  import Button from '../../../src/button';
  import Icon from '../../../src/icon'
  export default {
    components:{
      'g-button': Button,
      'g-icon': Icon
    },
    data(){
      return{
        content:`
<g-button>默认按钮</g-button>
        `.replace(/\t+| +/g,' ').trim()
      }
    },
  }
</script>

<style>

</style>