import Vue from 'vue'
import Button from './button'
import Icon from "./icon"
import ButtonGroup from "./button-group"

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)

new Vue({
  el: '#app',
  data:{
    //添加全局初始值
    loading1:false,
    loading2:true,
    loading3:true,
  }
})

// 单元测试
import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
const expect = chai.expect
//测试use里面是不是#i-settings
{
  const Constructor = Vue.extend(Button)//把Button变成一个构造函数
  const vm = new Constructor({
    //接受属性
    propsData:{
      icon: 'settings'
    }
  })//通过构造函数弄出一个vm实例
  vm.$mount()//把这个实例挂载到内存里
  let useElement = vm.$el.querySelector('use')  // 在vm实例中的element中找use
  let href = useElement.getAttribute('xlink:href')  //找use元素的 xlink:href 是不是存在
  expect(href).to.eq('#i-settings') //希望 href的值 等于 #i-settings
  vm.$el.remove() //把vm元素删除
  vm.$destroy() //把vm对象删除
}
//测试use里面是不是#i-loading
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData:{
      icon: 'settings',
      loading:true
    }
  })
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-loading')
  vm.$el.remove()
  vm.$destroy()
}
//测试order1，判断icon在左边
{
  const div = document.createElement('div') //创建div
  document.body.appendChild(div)  //在body里面添加一个div
  const Constructor = Vue.extend(Button)  //把Button变成一个构造函数
  const vm = new Constructor({
    propsData:{
      //接受属性
      icon: 'settings',
    }
  })//通过构造函数弄出一个vm实例
  vm.$mount(div)//挂载到div里面
  let svg = vm.$el.querySelector('svg') //在vm实例中的element中找svg
  let {order} = window.getComputedStyle(svg)  //解析svg里面的order，CSS样式
  expect(order).to.eq('1')  //希望 order 等于 '1'
  vm.$el.remove()
  vm.$destroy()
}
//测试order2，判断icon在左边
{
  const div = document.createElement('div') //创建div
  document.body.appendChild(div)  //在body里面添加一个div
  const Constructor = Vue.extend(Button)  //把Button变成一个构造函数
  const vm = new Constructor({
    propsData:{
      //接受属性
      icon: 'settings',
      iconPosition: 'right'
    }
  })//通过构造函数弄出一个vm实例
  vm.$mount(div)//挂载到div里面
  let svg = vm.$el.querySelector('svg') //在vm实例中的element中找svg
  let {order} = window.getComputedStyle(svg)  //解析svg里面的order，CSS样式
  expect(order).to.eq('2')  //希望 order 等于 '2'
  vm.$el.remove()
  vm.$destroy()
}
//测试button被点击事件
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData:{
      icon: 'settings',
    }
  })
  vm.$mount()
  let spy = chai.spy(function(){})  //spy是监听一个函数
  vm.$on('click',spy) //当vm被点击的时候，监听函数
  let button = vm.$el
  button.click()  //button被点击了
  expect(spy).to.have.been.called() //希望这个监听函数已经在button被点击的时候被调用了
  vm.$el.remove()
  vm.$destroy()
}
