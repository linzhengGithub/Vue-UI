<template>
  <div class="toast">
    <slot v-if="!enableHtml"></slot>
    <div v-else v-html="$slots.default[0]"></div>
<!--    如果没有传enableHtml:true,那么就不会开启还是显示原来的slot-->
    <div class="line"></div>
    <span class="close" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
  </div>
</template>

<script lang="ts">
  export default {
    props:{
      autoClose:{//存在
        type:Boolean,
        default:true
      },
      autoCloseDelay:{//出现3s自动消失
        type: Number,
        default: 3
      },
      closeButton:{
        type:Object,
        default(){ //如果default是一个对象，那么default就要写成函数形式
          return {
            text:'关闭',callback:undefined //默认为undefined，如果外部没有传text，那么text的内容就'关闭'
          }
        }
      },
      enableHtml:<Boolean>{
        default:false
      }
  },
    mounted(): void {
      if (this.autoClose){//如果这个div出现在页面中，那就说明autoClose为true
        setTimeout(()=>{//3秒后关闭
          this.close()
        },this.autoCloseDelay * 1000)
      }
    },
    methods:{
      close(){
        this.$el.remove()//移除元素
        this.$destroy()//消除绑定的事件等...
      },
      onClickClose(){
        this.close()
        if(this.closeButton && typeof this.closeButton.callback === 'function'){ //如果有closeButton 并且 这个这个closeButton的callback是函数就执行下面的代码
          this.closeButton.callback()
        }

      }
    }
  }
</script>

<style lang="scss" scoped>
  $font-size:14px;  $toast-height:40px;  $toast-bg:rgba(0,0,0,0.75);
  .toast{
    position: fixed;top: 0;left: 50%;transform: translateX(-50%);line-height: 1.8;
    height:$toast-height;color: white;display: flex;align-items: center;
    background: $toast-bg;border-radius: 4px;padding: 0 16px;
    box-shadow: 0 0 3px 0 rgba(0,0,0,0.50);
  }
  .close{
    padding-left:16px;
  }
  .line{
     height: 100%;
     margin-left: 16px;
     border-left: 1px solid #666;
   }
</style>