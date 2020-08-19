<template>
  <div class="collapse-item">
    <div class="title" @click="toggle">
      {{title}}
    </div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    props:{
      title:{
        type: String,
        required:true
      },
      name:{
        type:String
      }
    },
    data(){
      return{
        open:{
          type:Boolean,
          default:false,
        },
        single:{
          type:Boolean,
          default: false
        }
      }
    },
    inject:['eventBus'],
    mounted(){//如果eventBus存在，就监听爸爸组件'update:selected'，如果names里面有this.name那么open就是打开的，否则反之
      this.eventBus && this.eventBus.$on('update:selected',(names)=>{
        this.open = names.indexOf(this.name) >= 0;
      })
    },
    methods:{
      toggle(){//用户点击事件
        if (this.open){//如果open存在,是true的时候点击就触发'update:removeSelected'，看this.name
          this.eventBus && this.eventBus.$emit('update:removeSelected',this.name)
        }else{//如果open不存在,是false的时候点击就触发'update:addSelected'，看this.name
          this.eventBus && this.eventBus.$emit('update:addSelected',this.name)
        }
      },
    }
  }
</script>

<style lang="scss" scoped>
  $border-color:#ddd;$border-radius:4px;
  .collapse-item{
    > .title{
      border: 1px solid $border-color;
      margin-top: -1px;margin-left: -1px;margin-right: -1px;
      min-height:32px;display: flex;align-items:center;padding: 0 8px;
    }
    > .content{padding: 8px;}
    &:first-child{
      > .title{border-top-left-radius: $border-radius;border-top-right-radius: $border-radius;}
    }
    &:last-child{
      > .title:last-child{
        margin-bottom: -1px;
        border-bottom-left-radius: $border-radius;border-bottom-right-radius: $border-radius;
      }
    }
  }
</style>