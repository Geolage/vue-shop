<template>
  <div class="shop-page" v-loading.fullscreen.lock="!isFetched" element-loading-text="正在拼命加载中 ..." element-loading-background="#fff">
    <div class="page-order" v-show="isFetched">
      <ctm-header :showNav="false"></ctm-header>
      <transition name="router-transiton" mode="out-in" :enter-active-class="transEnter" :leave-active-class="transLeave">
        <router-view class="animated" style="margin-top: 40px"></router-view>
      </transition>
      <ctm-footer></ctm-footer>
    </div>
  </div>
</template>
<script>
  import CtmHeader from '/common/header'
  import CtmFooter from '/common/footer'
  export default {
    data () {
      return {
        transEnter: 'fadeInRight',
        transLeave: 'fadeOutLeft',
        isFetched: false
      }
    },
    watch: {
      '$route' (to, from) {
        if (to.name === 'paysuccess') {
          this.transName = 'fadeOutLeft'
        } else {
          this.transName = 'fadeOutRight'
        }
        this.$router.isBack = false
      }
    },
    mounted () {
      // fetching data mock
      setTimeout(() => {
        this.isFetched = true
      }, 1500)
    },
    components: {
      CtmHeader,
      CtmFooter
    }
  }
</script>
