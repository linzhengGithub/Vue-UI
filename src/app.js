import Vue from 'vue'
import Button from './button'
import Icon from "./icon"
import ButtonGroup from "./button-group"
import Input from './input'
import Col from './col'
import Row from './row'
import Header from './header'
import Content from './content'
import Footer from './footer'
import Sider from './sider'
import Layout from './layout'
import Toast from './toast'
import plugin from './plugin' //引用
import Tabs from './tabs'
import TabsBody from './tabs-body'
import TabsHead from './tabs-head'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import Popover from './popover'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-input',Input)
Vue.component('g-col',Col)
Vue.component('g-row',Row)
Vue.component('g-header',Header)
Vue.component('g-content',Content)
Vue.component('g-footer',Footer)
Vue.component('g-sider',Sider)
Vue.component('g-layout',Layout)
Vue.component('g-toast',Toast)
Vue.use(plugin) //使用
Vue.component('g-tabs',Tabs)
Vue.component('g-tabs-body',TabsBody)
Vue.component('g-tabs-head',TabsHead)
Vue.component('g-tabs-item',TabsItem)
Vue.component('g-tabs-pane',TabsPane)
Vue.component('g-popover',Popover)

new Vue({
  el: '#app',
  data: {
    //添加全局初始值
    selectedTab:'b'
  },
  created() {
  },
  methods: {
    showToast(){
      this.$toast('余额不足！请及时充值！',{//传的第二个参数，可以选择不传
        closeButton: {
          text:'支付完成',
          callback(){
            console.log('ok')
          }
        },
        enableHtml: true,
        position:'top',
      })
    }
  },
})
