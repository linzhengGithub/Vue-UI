import Button from '../src/button'

const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
  it('存在.', () => {
    expect(Col).to.exist
  })
  describe('props',()=>{
    it('接受 autoClose',(done)=>{
      const div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          autoClose:2
        }
      }).$mount(div)
      vm.$on('close',()=>{
        expect(document.body.contains(vm.$el)).to.eq(false)
        done()
      })
    })
    it('接受 closeButton',(done)=>{
      const Constructor = Vue.extend(Toast)
      const callback = sinon.fake();
      const vm = new Constructor({
        propsData: {
          closeButton: {
            text:'ok',
            callback
          }
        }
      }).$mount()
      let closeButton = vm.$el.querySelector('.close')
      expect(closeButton.textContent.trim()).to.eq('ok')
      setTimeout(()=>{//异步
        closeButton.click()
        expect(callback).to.have.been.called
        done()
      },200)
      })
    it('接受 enableHtml',()=>{
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          propsData:{
            enabledHtml:true
          }
        }
      })
      vm.$slots.default = ['<string id="test">hi</string>']
      vm.$mount()
      let strong = vm.$el.querySelector('#test')
      expect(strong).to.exist
    })
    it('接受 position',()=>{
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          position:'middle'
        }
      }).$mount()
      expect(vm.$el.classList.contains('position-middle')).to.eq(true)
    })
    })
  })