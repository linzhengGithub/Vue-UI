<template>
  <div style="padding-top: 16px">
    <h2>简单用法</h2>
    <h4>预览</h4>
    <g-input value="中文"></g-input>
    <g-input value="中文" disabled></g-input>
    <g-input value="中文" readonly></g-input>
    <h4>代码</h4>
    <pre><code>{{content}}</code></pre>
    <h2>双向绑定</h2>
    <g-input v-model="value"></g-input>
    <div>
      value: {{value}}
    </div>
    <pre><code>{{content2}}</code></pre>
  </div>
</template>

<script lang="ts">
  import Input from '../../../src/input';

  export default {
    components: {
      'g-input': Input
    },
    data() {
      return {
        value:'1',
        content: `
        <g-input value="中文"></g-input>
        <g-input value="中文" disabled></g-input>
        <g-input value="中文" readonly></g-input>
        `.replace(/\t+| +/g, ' '),
        content2: `
        data:{
          value: '1'
        }
        <g-input v-model="value"></g-input>
        <div>
        value: {{value}}</div>`.replace(/\t+| +/g, ' '),
      };
    }
  };
</script>
