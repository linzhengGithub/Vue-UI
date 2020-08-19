<template>
  <div style="padding-top: 16px">
    <h2>基本用法</h2>
    <p>可以同时展开多个面板</p>
    <h4>预览</h4>
    <g-collapse :selected.sync="selected">
      <g-collapse-item title="标签1" name="1">内容1</g-collapse-item>
      <g-collapse-item title="标签2" name="2">内容2</g-collapse-item>
      <g-collapse-item title="标签3" name="3">内容3</g-collapse-item>
    </g-collapse>
    <h4>代码</h4>
    <pre><code>{{content}}</code></pre>
    <h2>手风琴</h2>
    <p>每次只能展开一个面板</p>
    <h4>预览</h4>
    <g-collapse :selected.sync="selected2" single>
      <g-collapse-item title="标签1" name="1">内容1</g-collapse-item>
      <g-collapse-item title="标签2" name="2">内容2</g-collapse-item>
      <g-collapse-item title="标签3" name="3">内容3</g-collapse-item>
    </g-collapse>
    <h4>代码</h4>
    <pre><code>{{content2}}</code></pre>
  </div>
</template>

<script lang="ts">
  import Collapse from '../../../src/collapse'
  import CollapseItem from '../../../src/collapse-item';

  export default
  {
    components:{
      'g-collapse':Collapse,
      'g-collapse-item':CollapseItem,
    },
    data(){
      return{
        selected:['1','2'],
        selected2:['1'],
        content:`
data:{
  selected:['1','2']
}
<g-collapse :selected.sync="selected">
  <g-collapse-item title="标签1" name="1">内容1</g-collapse-item>
  <g-collapse-item title="标签2" name="2">内容2</g-collapse-item>
  <g-collapse-item title="标签3" name="3">内容3</g-collapse-item>
</g-collapse>
        `,
        content2:`
data:{
  selected:['1']
}
<g-collapse :selected.sync="selected" single>
  <g-collapse-item title="标签1" name="1">内容1</g-collapse-item>
  <g-collapse-item title="标签2" name="2">内容2</g-collapse-item>
  <g-collapse-item title="标签3" name="3">内容3</g-collapse-item>
</g-collapse>
        `
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>