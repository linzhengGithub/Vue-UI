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
      title:<String>{
        required:true
      },
    },
    data(){
      return{
        open:<Boolean>false
      }
    },
    inject:['eventBus'],
    mounted(): void {
      this.eventBus && this.eventBus.$on('update:selected',(vm)=>{
        if (vm !== this){
          this.close()
        }
      })

    },
    methods:{
      toggle(){
        if (this.open){
          this.open = false
        }else{
          this.open = true
          this.eventBus && this.eventBus.$emit('update:selected',this)
        }
      },
      close(){this.open = false},
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
      > .title{
        border-top-left-radius: $border-radius;border-top-right-radius: $border-radius;
      }
    }
    &:last-child{
      > .title:last-child{
        margin-bottom: -1px;
        border-bottom-left-radius: $border-radius;border-bottom-right-radius: $border-radius;
      }
    }
  }
</style>