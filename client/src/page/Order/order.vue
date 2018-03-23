<template>
  <div>
    <ctm-header :showNav="false"></ctm-header>
    <router-view style="margin-top: 40px;"></router-view>
    <ctm-footer></ctm-footer>
  </div>
</template>
<script>
  import CtmHeader from '/common/header'
  import CtmFooter from '/common/footer'
  export default {
    components: {
      CtmHeader,
      CtmFooter
    }
  }
</script>
