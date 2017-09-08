<template>
  <div id="app">
    <div class="header">
      <Menu mode="horizontal" :theme="theme1" active-name="1">
        <div class="container">
          <a href="/" class="router-link-active webname">
            Demo.Ran
          </a>
          <div class="nav-list">
            <MenuItem name="1">
              <router-link to="/">首页</router-link>
            </MenuItem>
            <MenuItem name="2">
              <Tooltip placement="bottom">
                <a href="http://hao.shetu.cc" target="_blank">N.HUNT</a>
                <div slot="content">
                  <p>SHETU旗下导航站</p>
                  <p>为您推荐最好的新产品</p>
                </div>
              </Tooltip>
            </MenuItem>
            <MenuItem name="3">
              <router-link to="/about/">关于我</router-link>
            </MenuItem>
          </div>
        </div>
      </Menu>

    </div>
    <router-view></router-view>
    <div class="footer">
      <div class="container">
        <p>Copyright 2017 Shetu.cc - All Rights Reserved.</p>
        <p class="designed">Designed By <a href="http://www.shetu.cc">SheTu</a></p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'app',
    data () {
      return {
        theme1: 'light'
      }
    }
  }
</script>

<style>
  #app {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
    font-size: 16px;
  }
  .logo{
    height: 60px;
    /*margin-top: 15px;*/
    float: left;
  }
  .webname{
    font-size: 2.0rem;
    color: #2c3e50;
    font-weight: 600;
  }
  .header{
    color: #495060;
    width: 100%;
    background: #fff;
    font-size: 16px;
    margin-bottom: 24px;
  }
  .nav-list{
    float: right;
    height: inherit;
  }
  .nav-list a{
    color: #2c3e50;
    font-size: 14px;
  }

  .footer{
    padding: 20px 0;
    background: #f5f5f5;
    color: #aaa;
    font-size: 14px;

  }
  .footer p{
    display: inline-block;
  }
  .designed{
    float: right;
    height: inherit;
    display: inline-block;
  }
  .container {
    max-width: 660px;
    margin: 0 auto;
    padding: 0.2rem;
  }


  @media (max-width: 992px){
    .webname{
      font-size: 0.3rem;
    }
  }
  @media (min-width: 768px){

  }
  .ivu-menu-horizontal.ivu-menu-light:after{
    background: none;
  }
</style>
