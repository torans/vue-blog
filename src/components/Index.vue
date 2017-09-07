<template>
  <div class="container index">
    <div class="loader" v-show="isLoading">
      <Spin fix>
        <Icon type="load-c" size=30 class="demo-spin-icon-load"></Icon>
        <div>数据加载中</div>
      </Spin>
    </div>
    <ul>
      <li v-for="item in articles" class="list-item">
        <router-link v-bind:to="/detail/+'id/'+item.id" class="list-item-title">{{ item.title }}</router-link>
        <p class="list-item-desc">{{ item.introduction }}</p>
        <div class="list-item-info">
                    <span class="list-item-time">
                        <Icon type="ios-clock-outline"></Icon>
                        {{ item.create_time }}
                    </span>
          <span class="list-item-tag">
                         <Tag>{{ item.cate_id }}</Tag>
                    </span>
        </div>
      </li>
    </ul>
    <div class="next" v-show="!isLoading">
      <Button type="ghost" shape="circle" @click="loadMore()" id="loading">{{ next }}</Button>
    </div>
  </div>
</template>
<script>
  import Util from '../../config/util'
  export default {
    name: 'index',
    data () {
      return {
        articles: [],
        isLoading: true,
        current_page: 1,
        next: '获取更多内容',
        msg: ''
      }
    },
    mounted: function () {
      this.getArticles()
    },
    methods: {
      getArticles: function () {
        var _this = this
        Util.ajax('/articles/getlist/').then(function (res) {
          console.log(res)
          _this.isLoading = false
          _this.articles = res.data.data
          _this.current_page = res.data.current_page
        })
      },
      loadMore: function () {
        var _this = this
        _this.loading()
        _this.current_page++
        Util.ajax('/articles/getlist?page=' + _this.current_page).then(function (response) {
          console.log(response)
          _this.isLoading = false
          _this.total = response.data.total
          _this.articles = _this.articles.concat(response.data.data)
          if (response.data.data.length === 0) {
            _this.warning(true)
            _this.next = '别扯啦，我是有底线的(-_-!)'
          } else {
            _this.success(true)
          }
        })
      },
      success (nodesc) {
        this.$Notice.success({
          title: '数据加载成功'
        })
      },
      warning (nodesc) {
        this.$Notice.warning({
          title: '没有更多了的'
        })
      },
      loading () {
        const MSG = this.$Message.loading({
          content: '正在加载中...',
          duration: 0
        })
        setTimeout(MSG, 3000)
      }
    }
  }
</script>
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
  .list-item{
    padding: 20px 0;
    border-bottom: 1px solid #ddd;
    display: block;
  }
  .list-item-title{
    color: #464c5b;
    font-size: 24px;
    margin-bottom: 16px;
    font-weight: 600;
  }
  .list-item-title:hover{
    color: #57a3e8;
  }
  .list-item-desc{
    font-size: 14px;
    color: #657180;
  }
  .list-item-info{
    margin-top: 16px;
  }
  .list-item-time{
    color: #9ea7b4;
  }
  .list-item-tag{
    height: inherit;
    float: right;
  }
  .loader{
    position: relative;
    font-size: 16px;
    top:-10px;
  }
  .demo-spin-icon-load{
    animation: ani-demo-spin 1s linear infinite;
  }
  .next{
    margin: 30px 0;
    text-align: center;
  }
</style>
