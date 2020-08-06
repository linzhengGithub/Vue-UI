import Toast from './toast'
export default {
  install(Vue,options){//安装一个外部的脚本
    Vue.prototype.$toast = function (message,x) {//第二个参数可以选择不传
      let Constructor = Vue.extend(Toast) //创建一个构造函数，继承Toast
      let toast = new Constructor({
        propsData:{//接受一个外部传参
          closeButton: x.closeButton //接受一个closeButton,然后内容是第二个参数x的closeButton
        }
      }) //创建一个新的继承函数toast
      toast.$slots.default = [message] //让toast组件里面的slot的内容等于message
      toast.$mount() //挂载到内存里
      document.body.appendChild(toast.$el) //把toast这个div加载到页面，toast组件里面的元素（把toast组件里面的slot里面的内容添加到页面上）
    }
  }
}