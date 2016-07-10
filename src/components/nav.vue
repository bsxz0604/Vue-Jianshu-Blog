<template>
    <div class="navbar-box navbar-skin">
        <a class="nav-item logo" v-bind:class="{'active':$route.name != 'apps'}" v-link="{ name:'index'}">
            <b>Nic</b>
        </a>
        <a class="nav-item logo github" href="https://github.com/bsxz0604" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
        <div class="navbar-expanded">
            <div>
                <a class="nav-item logo" title="登录" v-link="{ name:'login'}" ><i class="fa fa-sign-in"></i></a> 
            </div>
            <div>
                <a class="nav-item logo" title="打赏" data-toggle="modal" data-target="#WechatMoney"><b>赏</b></a> 
            </div>
        </div>
    </div>
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
.navbar-skin {
    background-color: #fff;
    box-shadow: 0 1px 4px #eee;
    
}
.navbar-box {
    height: 45px;
    width: 100%;
    left:0;
    top:0;
}
.nav-item{
    width: 45px;
    height: 45px;
    float:left;
}
.logo{
    display: block;
    font-size: 18px;
    text-align: center;
    line-height: 45px;
    color: white;
}
.logo:hover{
    background-color: #f49484;
    text-decoration: none;
}
.logo:focus{
    text-decoration: none;
}
a:focus{
    outline:none;
}
.active{
    background-color: #e78170;
    text-shadow: 0 1px 0 #de533a;
}
.github{
    font-size: 30px;
    color: #b1b1b1; 
}
.github:hover{
    color: white; 
}
.navbar-box .navbar-expanded{
    display: none!important;
}


@media (min-width: 768px){
    .navbar-skin {
        background: #2a2a2a;
        box-shadow: none;
    }
}
@media (min-width: 768px){
    .navbar-box {
        width: 45px;
        height: 100%;
        position: fixed;
        left:0;
        top:0;
    }
}
@media (min-width: 768px){
    .navbar-box .navbar-expanded {
        display: block!important;
        position: absolute;
        bottom: 0;
        width: 100%;
    }
}
</style>
<script>
    export default{
        ready(){
            // $('[data-toggle="popover"]').popover();
        },
        data(){
            return{
                
            }
        },
        methods:{
        },
    }
</script>