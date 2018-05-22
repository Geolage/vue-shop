<template>
  <div class="shop-page" v-loading.fullscreen.lock="loading" element-loading-text="请稍等，正在拼命加载中 ..." element-loading-background="#fff">
    <div class="goods" v-show="!loading">
      <div class="nav">
        <div class="w">
          <a href="javascript:;" :class="{active:sortType===1}" @click="sort()">综合排序</a>
          <a href="javascript:;" @click="sort(1)" :class="{active:sortType===2}">价格从低到高</a>
          <a href="javascript:;" @click="sort(-1)" :class="{active:sortType===3}">价格从高到低</a>
          <div class="price-interval">
            <input type="number" class="input" placeholder="价格" v-model="min">
            <span style="margin: 0 5px"> - </span>
            <input type="number" placeholder="价格" v-model="max" @keydown.enter="_default" ref="getBlur">
            <ctm-button text="确定" classStyle="main-btn" @btnClick="_default" style="margin-left: 10px;"></ctm-button>
            <ctm-button text="重新筛选" classStyle="default-btn" @btnClick="reset" style="margin-left: 10px;"></ctm-button>
          </div>
          <div class="search-bar">
            <el-input class="input-box" v-model="searchText" placeholder="在这里搜索商品" clearable size="small" @keydown.enter.native="search" ref="search"></el-input>
            <ctm-button class="search-btn" text="搜索" classStyle="main-btn" @btnClick="search" style="margin-left: 10px;">确定</ctm-button>
          </div>
        </div>
      </div>

      <!--商品-->
      <div class="goods-box w">
        <mall-goods v-if="!notfound" v-for="(item,i) in computer" :key="i" :msg="item"></mall-goods>
      </div>

      <div class="notfound-context" v-show="notfound">
        <p style="margin-bottom: 20px">Oooops！暂无你想要找的东西 ...</p>
        <ctm-button text="返回" classStyle="default-btn" @btnClick="reset"></ctm-button>
      </div>

      <div v-show="!busy&&visible"
          class="w load-more"
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="busy"
          infinite-scroll-distance="100">
        正在加载中...
      </div>
    </div>
  </div>
</template>
<script>
  import {getComputer} from '/api/goods.js'
  import mallGoods from '/components/mallGoods'
  import CtmButton from '/components/ctmButton'
  export default {
    data () {
      return {
        computer: [],
        min: '',
        max: '',
        searchText: '',
        busy: false,
        loading: true,
        notfound: false,
        timer: null,
        sortType: 1,
        windowHeight: null,
        windowWidth: null,
        params: {
          page: 1,
          sort: ''
        },
        visible: false
      }
    },
    methods: {
      _getComputer (flag) {
        let params = {
          params: {
            page: this.params.page,
            sort: this.params.sort,
            priceGt: this.min,
            priceLte: this.max,
            searchText: this.searchText
          }
        }
        getComputer(params).then(res => {
          if (res.result.count) {
            let data = res.result.data
            if (flag) {
              this.computer = this.computer.concat(data)
            } else {
              this.computer = data
            }
            this.notfound = false
            this.visible = res.result.count >= 4
          } else {
            clearTimeout(this.timer)
            this.notfound = !this.computer.length
            this.busy = true
            this.notfound && (this.searchText && this.$refs.search.focus() || this.max && this.$refs.getBlur.focus())
          }
          // delay mocking
          setTimeout(() => {
            this.loading = false
          }, 1000)
        })
      },
      // 默认结果
      _default () {
        this.params.page = 1
        this.searchText = ''
        this.busy = false
        this.loading = true
        this._getComputer()
        this.$refs.getBlur.blur()
      },
      // 重新筛选
      reset () {
        this.sortType = 1
        this.params.sort = ''
        this.min = ''
        this.max = ''
        this.computer
        this._default()
      },
      // 搜索商品
      search (e) {
        e.target.blur()
        this.params.page = 1
        this.busy = false
        this.loading = true
        this.computer = []
        this._getComputer()
      },
      // 价格排序
      sort (v) {
        v ? (v === 1 ? this.sortType = 2 : this.sortType = 3) : this.sortType = 1
        this.params.sort = v
        this.params.page = 1
        this.busy = false
        this._getComputer()
      },
      // 加载更多
      loadMore () {
        this.busy = true
        this.timer = setTimeout(() => {
          this.params.page++
          this._getComputer(true)
          this.busy = false
        }, 500)
      }
    },
    created () {
      this._getComputer()
    },
    mounted () {
      this.windowHeight = window.innerHeight
      this.windowWidth = window.innerWidth
    },
    components: {
      mallGoods,
      CtmButton
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../assets/style/mixin";
  @import "../../assets/style/theme";

  .nav {
    height: 60px;
    line-height: 60px;
    > div {
      position: relative;
      display: flex;
      align-items: center;
      a {
        padding: 0 15px;
        height: 100%;
        @extend %block-center;
        font-size: 12px;
        color: #999;
        &.active {
          color: #5683EA;
        }
        &:hover {
          color: #5683EA;
        }
      }
      input {
        @include wh(80px, 30px);
        border: 1px solid #ccc;
      }
      input + input {
        margin-left: 10px;
      }
    }
    .price-interval {
      padding: 0 15px;
      @extend %block-center;
      input[type=number] {
        border: 1px solid #ccc;
        text-align: center;
        background: none;
        border-radius: 5px;
      }
    }
    .search-bar {
      position: absolute;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      .search-btn {
        height: 32px;
        margin-left: 10px;
        margin-top: 1px;
      }
    }
  }
  .load-more {
    text-align: center;
    background: #fff;
  }
  .goods-box {
    > div {
      float: left;
      border: 1px solid #efefef;
    }
  }

  .notfound-context {
    width: 100%;
    padding: 100px 0;
    text-align: center;
    font-size: 20px;
  }

</style>
