<template>
  <div class="detail">
    <div class="container">
      <div class="loader" v-show="isLoading">
        <Spin fix>
          <Icon type="load-c" size=30 class="demo-spin-icon-load"></Icon>
          <div>Loading</div>
        </Spin>
      </div>
      <div class="content">
        <h1 v-text="content.title" class="title"></h1>
        <div class="title-line"></div>
        <div class="info">
          <p class="created">{{ content.create_time }}</p>
          <!--<p class="category">分类：{{ content.cid }}</p>-->
          <!--<p class="author">作者：{{ content.author }}</p>-->
          <!--<p class="views">访问：{{content.reading }}</p>-->
        </div>
        <article v-html="content.content" v-hljs></article>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import Util from '../../config/util'
  import hljs from 'highlight.js'
  import 'highlight.js/styles/atom-one-dark.css'
  Vue.directive('hljs', el => {
//    let blocks = el.querySelectorAll('pre code')
    let blocks = el.querySelectorAll('pre')
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)
  })

  export default {
    name: 'detail',
    data () {
      return {
        ranges: 10,
        content: [],
        isLoading: true,
        detail: 1,
        total: 0,
        msg: ''
      }
    },
    mounted: function () {
      this.getDetail()
    },
    methods: {
      getUrlKey: function (name) {
        return decodeURIComponent((new RegExp('[/]' + name + '/' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [])[1].replace(/\+/g, '%20')) || null
      },
      getDetail: function () {
        var _this = this
        let channel = _this.getUrlKey('id')
        Util.ajax('/articles/getdetail?id=' + channel).then(function (response) {
          _this.isLoading = false
          _this.content = response.data
          hljs.initHighlightingOnLoad()
        })
      }
    }
  }
</script>

<style scoped>
  .wrapper-container {
    width: 50%;
    margin: 30px auto 20px;
    background: #fff;
    border-radius: 2px;
    /*box-shadow: 0 1px 1px 0 rgba(0,0,0,.1);*/
    padding: 30px 0;
  }
  /*Detail*/
  .content{}
  .content .title{
    color: #1c2438;
    word-break: break-word!important;
    word-break: break-all;
    margin: 20px 0 0;
    font-family: -apple-system,SF UI Display,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
    font-weight: 900;
    margin-bottom: 12px;
  }
  .content .title-line{
    content: '';
    border-top: 6px solid #3d4145;
    width: 120px;
    /*position: absolute;*/
    left: 0;
    margin-bottom: 60px;
  }
  .content .info{
    color: #9ea7b4;
    margin-bottom: 30px;
  }
  .content .info p{
    font-size: 16px;
    margin:2px 0;
  }
  article{
    color: #495060;
    font-size: 16px;
  }
</style>
