<template>
  <div class="wrapper" :class="{error}">
    <input type="text" :value="value" :disabled="disabled" :readonly="readonly"
           @change="$emit('change',$event.target.value)"
           @input="$emit('input',$event.target.value)"
           @focus="$emit('focus',$event.target.value)"
           @blur="$emit('blur',$event.target.value)">
    <template v-if="error">
      <Icon name="error" class="icon-error"></Icon>
      <span class="errorMessage">{{error}}</span>
    </template>
  </div>
</template>

<script lang="ts">
  import Icon from './icon';

  export default {
    components: {Icon},
    props: {
      value: {
        type: String
      },
      disabled: {//禁止修改
        type: Boolean,
        default: false
      },
      readonly: {//只读
        type: Boolean,
        default: false
      },
      error: {
        type: String
      }
    }
  };
</script>

<style lang="scss" scoped>
  $height: 32px;
  $border-color: #999;
  $border-color-hover: #666;
  $border-radius: 4px;
  $font-size: 12px;
  $box-shadow-color: rgba(0, 0, 0, 0.5);
  $red: #F1453D;
  .wrapper {
    font-size: 14px;display: inline-flex;align-items: center;
    > :not(:last-child) {margin-right: .2em;}
    > input {
      height: 32px;border: 1px solid $border-color;border-radius: 4px;
      padding: 0 8px;font-size: inherit;
      &:hover {border-color: $border-color-hover;}
      &:focus {
        box-shadow: inset 0 1px 3px $box-shadow-color; //内阴影，Y轴1px 扩散半径3px
        outline: none; //取消默认光标点击聚焦
      }
      &[disabled], &[readonly] {
        border-color: #bbb;color: #bbb;cursor: not-allowed;
      }
    }
    &.error {
      > input {border-color: $red;}
    }
    .icon-error {fill: $red;}
    .errorMessage{color:$red}
  }
</style>