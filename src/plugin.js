import Toast from './toast'
// helper 提取一个createToast
const createToast = ({Vue,message,propsData,onClose}) =>{
  let Constructor = Vue.extend(Toast) //创建一个构造函数，继承Toast
  //创建一个新的继承函数toast
  let toast = new Constructor({propsData}) //接受x参数的所有数据
  toast.$slots.default = [message] //让toast组件里面的slot的内容等于message
  toast.$mount() //挂载到内存里
  toast.$on('close',onClose)//在点击close的时候 触发onClose
  document.body.appendChild(toast.$el) //把toast这个div加载到页面，toast组件里面的元素（把toast组件里面的slot里面的内容添加到页面上）
  return toast //Constructor一个Toast 返回一个toast
}
//创建一个currentToast变量
let currentToast

export default {
  install(Vue,options){//安装一个外部的脚本
    Vue.prototype.$toast = function (message,toastOptions) {//第二个参数可以选择不传
      if (currentToast){//如果currentToast存在，那么就把他关闭，永远就只有一个toast
        currentToast.close()
      }
      currentToast = createToast({
        Vue,
        message,
        propsData:toastOptions,
        onClose:()=>{
          currentToast = null
        }//使currentToast = null
      })
    }
  }
}