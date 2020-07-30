const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'
Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
  it('存在.', () => {expect(Input).to.be.ok})
  describe('props', () => {//分组，先测props
    const Constructor = Vue.extend(Input) //因为每个测试都需要运行这一步，就把它提出来，减少代码重复
    let vm  //作用域变量vm，为了配合afterEach,把vm变成这个作用域里面的vm，直接拿就行
    afterEach(()=>{vm.$destroy();})  // 因为每个测试最后都要运行vm.$destroy()，提出来，减少代码重复
    it('可以设置value.', () => {
      vm = new Constructor({
        propsData: {value: '123'}
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.value).to.equal('123')
    })
    it('可以设置disabled.', () => {
      vm = new Constructor({
        propsData: {disabled: true}
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.disabled).to.equal(true)
    })
    it('可以设置readonly.', () => {
      vm = new Constructor({
        propsData: {readonly: true}
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.readOnly).to.equal(true)
    })
    it('可以设置error.', () => {
      vm = new Constructor({
        propsData: {error: '你错了'}
      }).$mount()
      const useElement = vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
      const errorMessage = vm.$el.querySelector('.errorMessage')
      expect(errorMessage.innerText).to.equal('你错了')
    })
  })
  describe('事件', () => {
    const Constructor = Vue.extend(Input) //因为每个测试都需要运行这一步，就把它提出来，减少代码重复
    let vm  //作用域变量vm，为了配合afterEach,把vm变成这个作用域里面的vm，直接拿就行
    afterEach(()=>{vm.$destroy();})  // 因为每个测试最后都要运行vm.$destroy()，提出来，减少代码重复
    it('支持change/input/focus/blur事件.', () => {
      ['change','input','focus','blur'].forEach((eventName)=>{//遍历数组里面的事件
        vm = new Constructor({}).$mount()
        const callback = sinon.fake()//制造一个监听函数（假函数）
        vm.$on(eventName,callback) //当change/input/focus/blur事件被触发，调用这个监听函数
        //触发input的change事件
        let event = new Event(eventName) //触发了change改变了event
        Object.defineProperty(
          event,'target',{value:{value:'hi'},enumerable:true}
        )//让测试支持v-model测试
        const inputElement = vm.$el.querySelector('input')  //找到input
        inputElement.dispatchEvent(event) // 模拟event发生变化
        console.log(eventName)
        expect(callback).to.have.been.calledWith('hi') //期待callback被调用
      })
    })
  })
})