<template>
  <div id="app">
    <div class="header">
      <Menu mode="horizontal" :theme="theme1" active-name="1">
        <div class="container">
          <a href="/" class="router-link-active">
            <img class="logo" src="../static/images/logo.png" alt="www.shetu.cc">
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
      <div class="banner">
        <div class="container">
          <h1 class="slogan">十年寒窗苦读书,一举成名天下知</h1>
        </div>
      </div>
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
  }
  .logo{
    height: 60px;
    /*margin-top: 15px;*/
    float: left;
  }
  .header{
    color: #495060;
  }
  .nav-list{
    float: right;
    height: inherit;
  }
  .nav-list a{
    color: #2c3e50;
    font-size: 14px;
  }
  .header .banner{
    background: #2c3e50;
    padding: 30px 0;
    text-align: left;
  }
  .header .banner .slogan{
    color: #D8D7D5;
    font-weight: 100;
  }
  .footer{
    padding: 20px 0;
    background: #2c3e50;
    color: #ffffff;

  }
  .footer p{
    display: inline-block;
  }
  .designed{
    float: right;
    height: inherit;
    display: inline-block;
  }
  @media (min-width: 1200px){
    .container {
      width: 60%;
      margin: 0 auto;
    }
  }


  @media (min-width: 992px){

  }
  @media (min-width: 768px){

  }
</style>
