<template>
    <footer >
        <div class="footer-container">
          <ul>
            <li>
              <span>©2016 / 沪ICP备160710xxx号-1</span>
            </li>
            <li>
              <a class="github" href="https://github.com/bsxz0604" target="_blank">
                <i class="fa fa-github"></i>
              </a>
            </li>
            <li>
              <a class="weibo" href="http://weibo.com/u/2203147652" target="_blank">
                <i class="fa fa-weibo"></i>
              </a>
            </li>
            <li>
              <a class="weixin" data-toggle="modal" data-target="#WechatMoney" >
                <i class="fa fa-weixin"></i>
              </a>
            </li>
          </ul>
        </div>
    </footer>
    <div class="modal fade" id="WechatMoney" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">微信扫一扫，支持我一下 : )</h4>
          </div>
          <div class="modal-body">
            <img src="/static/2.png" alt="">
          </div>
        </div>
      </div>
    </div>
</template>
<style scoped>
footer {
    border-color: #d9d9d9;
    padding: 10px 0 10px 25%;
    border-top-width: 1px;
    border-top-style: solid;
    overflow: hidden;
    box-sizing: border-box;
}
.footer-container {
    display: inline-block;
    margin: 0;
    color: #999;
    font-size: 12px;
    padding-left: 65px;
    vertical-align: middle;
}
.footer-container ul {
    margin: 0;
    padding: 0;
}
.footer-container ul li {
    margin-right: 10px;
    display: inline-block;
}
.footer-container ul li a {
    width: 30px;
    height: 30px;
    display: inline-block;
    border-radius: 50%;
    line-height: 30px;
    font-size: 18px;
    text-align: center;
    color: #999;
}
a.github,a.weibo,a.weixin {
    background-color: #eee;
}
a.github:hover{
    background-color: #777;
    color: #fff;
}
a.weibo:hover{
    background-color: #f57e42;
    color: #fff;
}
a.weixin:hover{
    background-color: #49be38;
    color: #fff;
}
</style>
<script>
    export default{
        ready(){
            
        },
        data(){
            return{
                
            }
        },
        methods:{
        },
    }
</script>