<template>
  <div class="popover" @click="onClick" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
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
    data() {
      return {visible: <Boolean>false};
    },
    methods: {
      positionContent() {
        document.body.appendChild(this.$refs.contentWrapper);//在document 里面添加内容
        let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect();
        //因为 为了避免被overflow:hidden 所以 放在document.body里面，然后获取left，top，再加上window.scrollX，window.scrollY
        this.$refs.contentWrapper.style.left = left + window.scrollX + 'px';
        this.$refs.contentWrapper.style.top = top + window.scrollY + 'px';
      },
      onClickDocument(e) {//点击document发生的事情
        //如果点击的是popover的内容，那么第二个就成立就什么都不做，如果点击的是contentWrapper的内容，那么第一个就成立就什么都不做。
        if (this.$refs.popover &&
          (this.$refs.contentWrapper === e.target || this.$refs.popover.contains(e.target))) { return; } else {
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
    border-radius: $border-radius;box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    transform: translateY(-100%);margin-top: -10px;
    &::after,&::before{
      content: '';display: block;position: absolute;width: 0;height: 0;
      border: 10px solid transparent;left: 10px;
    }
    &::after{top: 100%;border-top-color: white;}
    &::before{top:calc(100% + 0.9px);border-top-color: black;}
  }

</style>