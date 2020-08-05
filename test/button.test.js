const expect = chai.expect;
import Vue from 'vue'
import Button from '../src/button'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', () => {
  it('存在.', () => {
    expect(Button).to.be.ok
  })
  it('可以设置icon.', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'settings'
      }
    }).$mount()
    const useElement = vm.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.equal('#i-settings')
    vm.$destroy()
  })
  it('可以设置loading.', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'settings',
        loading: true
      }
    }).$mount()
    const useElements = vm.$el.querySelectorAll('use')
    expect(useElements.length).to.equal(1)
    expect(useElements[0].getAttribute('xlink:href')).to.equal('#i-loading')
    vm.$destroy()
  })
  it('icon 默认的 order 是 1', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'settings',
      }
    }).$mount(div)
    const icon = vm.$el.querySelector('svg')
    expect(getComputedStyle(icon).order).to.eq('1')
    vm.$el.remove()
    vm.$destroy()
  })
  it('设置 iconPosition 可以改变 order', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'settings',
        iconPosition: 'right'
      }
    }).$mount(div)
    const icon = vm.$el.querySelector('svg')
    expect(getComputedStyle(icon).order).to.eq('2')
    vm.$el.remove()
    vm.$destroy()
  })
  it('点击 button 触发 click 事件', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'settings',
      }
    }).$mount()

    const callback = sinon.fake();
    vm.$on('click', callback)
    vm.$el.click()
    expect(callback).to.have.been.called

  })
})

// // 单元测试
// import chai from 'chai'
// import spies from 'chai-spies'
// chai.use(spies)
// const expect = chai.expect
// {//测试button里面的icon的use里面是不是#i-settings
//   const Constructor = Vue.extend(Button) //把Button变成一个构造函数
//   const vm = new Constructor({
//     //接受属性
//     propsData:{
//       icon: 'settings'
//     }
//   })//通过构造函数弄出一个vm实例
//   vm.$mount()//把这个实例挂载到内存里
//   let useElement = vm.$el.querySelector('use')  // 在vm实例中的element中找use
//   let href = useElement.getAttribute('xlink:href')  //找use元素的 xlink:href 是不是存在
//   expect(href).to.eq('#i-settings') //希望 href的值 等于 #i-settings
//   vm.$el.remove() //把vm元素删除
//   vm.$destroy() //把vm对象删除
// }
// {//测试button里面的icon的use里面是不是#i-loading
//   const Constructor = Vue.extend(Button)
//   const vm = new Constructor({
//     propsData:{
//       icon: 'settings',
//       loading:true
//     }
//   })
//   vm.$mount()
//   let useElement = vm.$el.querySelector('use')
//   let href = useElement.getAttribute('xlink:href')
//   expect(href).to.eq('#i-loading')
//   vm.$el.remove()
//   vm.$destroy()
// }
// {//测试order1，判断icon在左边
//   const div = document.createElement('div') //创建div
//   document.body.appendChild(div)  //在body里面添加一个div
//   const Constructor = Vue.extend(Button)  //把Button变成一个构造函数
//   const vm = new Constructor({
//     propsData:{
//       //接受属性
//       icon: 'settings',
//     }
//   })//通过构造函数弄出一个vm实例
//   vm.$mount(div)//挂载到div里面
//   let svg = vm.$el.querySelector('svg') //在vm实例中的element中找svg
//   let {order} = window.getComputedStyle(svg)  //解析svg里面的order，CSS样式
//   expect(order).to.eq('1')  //希望 order 等于 '1'
//   vm.$el.remove()
//   vm.$destroy()
// }
// {//测试order2，判断icon在左边
//   const div = document.createElement('div') //创建div
//   document.body.appendChild(div)  //在body里面添加一个div
//   const Constructor = Vue.extend(Button)  //把Button变成一个构造函数
//   const vm = new Constructor({
//     propsData:{
//       //接受属性
//       icon: 'settings',
//       iconPosition: 'right'
//     }
//   })//通过构造函数弄出一个vm实例
//   vm.$mount(div)//挂载到div里面
//   let svg = vm.$el.querySelector('svg') //在vm实例中的element中找svg
//   let {order} = window.getComputedStyle(svg)  //解析svg里面的order，CSS样式
//   expect(order).to.eq('2')  //希望 order 等于 '2'
//   vm.$el.remove()
//   vm.$destroy()
// }
// {//测试button被点击事件
//   const Constructor = Vue.extend(Button)
//   const vm = new Constructor({
//     propsData:{
//       icon: 'settings',
//     }
//   })
//   vm.$mount()
//   let spy = chai.spy(function(){})  //spy是监听一个函数
//   vm.$on('click',spy) //当vm被点击的时候，监听函数
//   let button = vm.$el
//   button.click()  //button被点击了
//   expect(spy).to.have.been.called() //希望这个监听函数已经在button被点击的时候被调用了
//   vm.$el.remove()
//   vm.$destroy()
// }