<template>
  <div>
<<<<<<< HEAD
    <g-button>默认按钮</g-button>
    <g-button icon="settings">默认按钮</g-button>
    <g-button icon="settings" icon-position="right">默认按钮</g-button>
    <g-button :loading="true">默认按钮</g-button>
=======
    <g-button>默认设置</g-button>
>>>>>>> 95e178e162c760f43e86136d9cca02e21a520c67
  </div>
</template>

<script>
  import Button from '../../../src/button';

  export default {
    components:{
      'g-button': Button
    },
  }
</script>