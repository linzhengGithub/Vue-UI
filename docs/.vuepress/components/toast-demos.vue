<template>
  <div style="padding-top: 16px">
    <h2>this.$toast</h2>
    <h4>预览</h4>
    <g-button @click="$toast('点击弹出提示', {position:'top'})">上方弹出</g-button>
    <g-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</g-button>
    <g-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</g-button>
    <h4>代码</h4>
    <pre><code>{{content}}</code></pre>
    <h2>设置关闭按钮</h2>
    <h4>预览</h4>
    <div>
      <g-button @click="$toast('点击我关闭了试试吧！', {position:'top',closeButton: {text:'点击我关闭',callback:()=>{`console.log('ok')`}}})">上方弹出</g-button>
    </div>
    <h4>代码</h4>
    <pre><code>{{content2}}</code></pre>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Button from '../../../src/button';
  import plugin from '../../../src/plugin';
  import Toast from '../../../src/toast'
  Vue.use(plugin)
  export default
  {
    components:{
      'g-button': Button,
      'g-toast': Toast
    },
    methods:{
      onClickButton () {
        this.$toast('点击我关闭了试试吧！', {
          closeButton: {
            text: '点击我关闭',
            callback: () => {
              console.log('关闭')
            }
          }
        })
      }
    },
    data(){
      return{
        content:`
<g-button @click="$toast('点击弹出提示', {position:'top'})">上方弹出</g-button>
<g-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</g-button>
<g-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</g-button>
        `,
        content2:`
<div>
  <g-button @click="onClickButton">上方弹出</g-button>
</div>

methods:{
      onClickButton () {
        this.$toast('点击我关闭了试试吧！', {
          closeButton: {
            text: '点击我关闭',
            callback: () => {
              console.log('关闭')
            }
          }
        })
      }
    }
        `
      }
    }
  }
</script>

<style lang="scss" scoped>
    .wrapper{
      z-index: 30 !important;
    }
</style>