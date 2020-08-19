<template>
  <div style="padding-top: 16px">
    <h2>简单用法</h2>
    <h4>预览</h4>
    <g-tabs :selected="selectedTab">
      <g-tabs-head>
        <g-tabs-item name="1">1</g-tabs-item>
        <g-tabs-item name="2">2</g-tabs-item>
        <g-tabs-item name="3" disabled>3</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="1">content 1</g-tabs-pane>
        <g-tabs-pane name="2">content 2</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script lang="ts">
import Tabs from '../../../src/tabs'
import TabsBody from '../../../src/tabs-body'
import TabsHead from '../../../src/tabs-head'
import TabsItem from '../../../src/tabs-item'
import TabsPane from '../../../src//tabs-pane'

  export default {
    components:{
      'g-tabs': Tabs,
      'g-tabs-body': TabsBody,
      'g-tabs-head': TabsHead,
      'g-tabs-item': TabsItem,
      'g-tabs-pane': TabsPane
    },
    data(){
      return {
        selectedTab:'1',
        content:`
data:{
  selectedTab: '1'
}

<g-tabs :selected="selected">
  <g-tabs-head>
    <g-tabs-item name="1">1</g-tabs-item>
    <g-tabs-item name="2">2</g-tabs-item>
    <g-tabs-item name="3" disabled>3</g-tabs-item>
  </g-tabs-head>
  <g-tabs-body>
    <g-tabs-pane name="1">content 1</g-tabs-pane>
    <g-tabs-pane name="2">content 2</g-tabs-pane>
    <g-tabs-pane name="3">content 3</g-tabs-pane>
  </g-tabs-body>
</g-tabs>
        `
      }
    },
  }
</script>