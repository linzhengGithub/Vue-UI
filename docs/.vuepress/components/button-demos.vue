<template>
  <div style="padding-top: 16px">
    <h2>简单用法</h2>
    <h4>预览</h4>
    <g-button>默认</g-button>
    <g-button disabled>默认</g-button>
    <g-button icon="settings">默认</g-button>
    <g-button icon="settings" icon-position="right">默认</g-button>
    <br>
    <g-button icon="right">right</g-button>
    <g-button icon="left">left</g-button>
    <g-button icon="down">down</g-button>
    <g-button icon="good">good</g-button>
    <g-button icon="download">download</g-button>
    <g-button icon="info">info</g-button>
    <g-button icon="error">error</g-button>
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
    mounted() {
      console.log(this.svg)
    },
    data(){
      return{
        content:`
<g-button>默认</g-button>
<g-button disabled>默认</g-button>
<g-button icon="settings">默认</g-button>
<g-button icon="settings" icon-position="right">默认</g-button>
<g-button icon="right">right</g-button>
<g-button icon="left">left</g-button>
<g-button icon="down">down</g-button>
<g-button icon="good">good</g-button>
<g-button icon="download">download</g-button>
<g-button icon="info">info</g-button>
<g-button icon="error">error</g-button>
        `.replace(/\t+| +/g,' ').trim()
      }
    },
  }
</script>

<style>
  .g-button{
    margin-bottom: 16px;

  }
</style>