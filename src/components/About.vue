<style scoped>
  .container{
    text-align: right;
    padding: 80px 0;
  }
  .container .title{
    padding:20px;
    font-size: 20px;
  }
  .background-images{
    text-align: left;
    margin-bottom: -186px;
  }
  .about{
    padding: 20px 0;
    line-height: 28px;
  }
  .about p{
    font-size: 18px;
    color: #495060;
  }
  .name{
    color: #1c2438;
    font-size: 28px!important;
    font-weight: 800;
    margin-bottom: 20px;
  }
  .content{
    /*padding: 20px;*/
    margin-top: 0px;
    font-size: 16px;
    line-height: 28px;
  }
  .content .shanchang{
    margin: 40px 0;
    font-size: 20px;
  }
  .content .hobby{
    margin-top: 40px;
    margin-bottom: 14px;
    font-size: 20px;
  }
  .hobbies{
    font-size: 30px;
  }
  .hobbies span{
    /*padding-right:10px;*/
  }
</style>
<template>
  <div class="wrapper-container">
    <div>
      <div class="container">
        <p slot="title" class="title">About Me</p>
        <div class="background-images">
          <img src="../../static/images/avatar.png">
        </div>
        <div class="about">
          <p class="name">冉俊(Demo.Ran)</p>
          <p about="sex">
            男勒&nbsp;&nbsp;<s>  矮穷矬  </s>
            <Icon type="male"></Icon>
          </p>
          <p class="works">
            3年开发经验
            <Icon type="code-working"></Icon>
          </p>
          <p class="local">
            贵州省·贵阳市·观山湖区
            <Icon type="ios-location"></Icon>
          </p>
          <p class="mail">
            Demo.Ran{at}icloud.com
            <Icon type="email"></Icon>
          </p>
          <p class="mail">
            <a href="https://github.com/torans" target="_blank">https://github.com/torans</a>
            <Icon type="social-github"></Icon>
          </p>
        </div>
        <div class="content">
          <p>有过创业失败经历和团队管理经验; //</p>
          <p>性格内向，不善言辞（撩妹例外）; //</p>
          <p>特喜欢瞎几巴捣鼓新技术；//</p>
          <p>智商低，情商也感人；//</p>
          <p>处女座，强迫症晚期患者。//</p>
         <div style="text-align: right">
           <p class="shanchang">职业技能</p>
           <p>擅长Ae、Ai、Br、Dw、Fl、Fw、Id、Lr、Pr、PS等软件的安装与卸载</p>
           <p>精通Java、PHP、Python、NodeJS、Go、MySQL、Redis等单词的拼写</p>
           <p>全面阅读《MySQL：从删库到跑路》、《Python从入门到放弃》等救命书籍</p>
         </div>

          <p class="hobby">兴趣爱好</p>
          <div class="hobbies">
            <span><Icon type="ios-game-controller-b"></Icon></span>
            <span><Icon type="ios-basketball"></Icon></span>
            <span><Icon type="android-bicycle"></Icon></span>
            <span><Icon type="ios-camera"></Icon></span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'about'
  }
</script>
