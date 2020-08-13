<template>
  <div class="popover" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible" :class="{[`position-${position}`]:true}">
      <!--      用户指定的内容-->
      <slot name="content"></slot>
    </div>
    <!--    默认插槽-->
    <span ref="triggerWrapper" style="display: inline-block">
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts">
  export default {
    props:{
      position:<String>{
        default:'top',
        validator(value): boolean{
            return ['top','bottom','left','right'].indexOf(value) >= 0
        }
      },
      trigger:{
        default: 'click',
        validator(value): boolean {
          return ['click','hover'].indexOf(value) >= 0
        }
      }
    },
    computed:{
      openEvent(){
        if(this.trigger === 'click'){return 'click'}
        else{return 'mouseenter'}
      },
      closeEvent(){
        if(this.trigger === 'click'){return 'click'}
        else{return 'mouseleave'}
      },
    },
    mounted(): void {
      if(this.trigger === 'click'){
        this.$refs.popover.addEventListener('click',this.onClick)
      }else{
        this.$refs.popover.addEventListener('mouseenter',this.open)
        this.$refs.popover.addEventListener('mouseleave',this.close)
      }
    },
    data() {
      return {visible: <Boolean>false};
    },
    methods: {
      positionContent() {
        //因为 为了避免被overflow:hidden 所以 放在document.body里面，然后获取left，top，再加上window.scrollX，window.scrollY
        const {contentWrapper,triggerWrapper} = this.$refs
        document.body.appendChild(this.$refs.contentWrapper);//在document 里面添加内容
        let {width, height, top, left} = triggerWrapper.getBoundingClientRect();
        let {height: height2} = contentWrapper.getBoundingClientRect()
        let positions = {
          top:{left:left + window.scrollX, top:top + window.scrollY},
          bottom:{left:left + window.scrollX, top:top + height + window.scrollY},
          left:{left:left + window.scrollX, top:top + window.scrollY + (height - height2)/2},
          right:{left:left + window.scrollX + width, top:top + window.scrollY + (height - height2)/2}
        }
        contentWrapper.style.left = positions[this.position].left + 'px'
        contentWrapper.style.top = positions[this.position].top + 'px'
      },
      onClickDocument(e) {//点击document发生的事情
        //如果点击的是popover的内容，那么第二个就成立就什么都不做，如果点击的是contentWrapper的内容，那么第一个就成立就什么都不做。
        if (this.$refs.popover &&
          (this.$refs.contetnWrapper === e.target || this.$refs.popover.contains(e.target) || this.$refs.contentWrapper.contains(e.target))) { return; }
        else {
          this.close();
        }
      },
      open() {
        this.visible = true;
        this.$nextTick(() => {//之后发生的事
          this.positionContent(); //定位contentWrapper内容的范围
          //添加监听document click事件
          document.addEventListener('click', this.onClickDocument); //添加 document click事件 然后 click document触发onClickDocument函数
        });
      },
      close() {
        this.visible = false;
        document.removeEventListener('click', this.onClickDocument);//移除document click 监听器
      },
      onClick(event) {
        if (this.$refs.triggerWrapper.contains(event.target)) {//如果点击的是span里面的triggerWrapper内容
          if (this.visible === true) {//如果visible为true就创建一个document click事件
            this.close();
          } else {
            this.open();
          }
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  $border-color:#333;
  $border-radius:4px;
  .popover {
    display: inline-block;vertical-align: top;position: relative;
  }
  .content-wrapper {
    position: absolute;border: 1px solid $border-color;padding: 0.5em 1em;
    border-radius: $border-radius;background: white;filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
    max-width: 20em;word-break: break-all;
    &::after,&::before{
      content: '';display: block;position: absolute;width: 0;height: 0;
      border: 10px solid transparent;
    }
    &.position-top{
      transform: translateY(-100%);margin-top: -10px;
      &::after,&::before{left: 10px;}
      &::after{top: 100%;border-top-color: white;}
      &::before{top:calc(100% + 0.9px);border-top-color: black;}
    }
    &.position-bottom{
      margin-top: 10px;
      &::after,&::before{left: 10px;}
      &::after{bottom: 100%;border-bottom-color: white;}
      &::before{bottom:calc(100% + 0.9px);border-bottom-color: black;}
    }
    &.position-left{
      transform: translateX(-100%);margin-left: -10px;
      &::after,&::before{left: 100%;transform: translateY(-50%);top: 50%;}
      &::after{left: 100%;border-left-color: white;}
      &::before{left:calc(100% + 0.9px);border-left-color: black;}
    }
    &.position-right{
      margin-left: 10px;
      &::after,&::before{right: 100%;transform: translateY(-50%);top: 50%;}
      &::after{right: 100%;border-right-color: white;}
      &::before{right:calc(100% + 0.9px);border-right-color: black;}
    }
  }

</style>