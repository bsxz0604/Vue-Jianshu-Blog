<template>
  <div>
    <h1>404,<span>页面没有发现</span></h1>
    <div class="bg-404"></div>
    <div class="btn-middle">
      <button type="button" class="btn-width btn btn-default" v-link="{ name:'index',activeClass: 'active' }" ><i class="fa fa-home" aria-hidden="true"></i>返回首页</button>
      <button type="button" class="btn-width btn btn-primary" v-on:click="goToMyGithub($event)"><i class="fa fa-github" aria-hidden="true"></i>Nic's GitHub</button>
    </div>
    <v-Nav></v-Nav>
  </div>
  
</template>

<style scoped>
h1{
  padding-top:100px;
  text-align: center;
  font-size:50px;
  color: rgba(0,0,0,0.5);
  margin:0;
}
.bg-404{
  width:100%;
  height:380px;
  background-image:url('../assets/404.jpg');
  background-repeat:no-repeat;
  background-position: center;
}
.btn-middle{
  margin:30px auto 0;
  text-align:center;
}
.btn-width{
  width:200px;
  
}
.fa{
  margin-right:10px;
}


</style>
<script>
    import vNav from '../components/nav.vue'
    export default{
        ready(){
            
        },
        data(){
            return{
                
            }
        },
        methods:{
          goToMyGithub:function(event){
            $(event.target).attr("disabled","disabled")
            window.location.href="https://github.com/bsxz0604";
          }
        },
        components:{
            vNav:vNav,
            // vProcess:vProcess,
            // vBtn:vBtn,
            // vCase:vCase
        },
    }
</script>
