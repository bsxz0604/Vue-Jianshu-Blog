<template>
    <div class="col-sm-3 sidebar-box">
        <div class="cover-img" style="background-image: url('/static/index-bg.jpg');"></div>
        <div class="bottom-block">
            <h1>Nic Li</h1>
            <h3>Show Me The Code</h3>
            <p>一个胖子的自言自语~</p>
        </div>
    </div>
</template>
<style scoped>
@media (min-width: 768px){
    .sidebar-box{
        display: block!important;
    }
}
.sidebar-box{
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 45px;
    padding: 0;
    box-sizing: border-box;
    min-height: 100px;
}
.cover-img{
    position:absolute;
    min-width:150px;
    height:100%;
    width:100%;
    background-size: cover;
    background-position: center;
}
.sidebar-box .bottom-block {
    position: absolute;
    bottom: 0;
    padding: 30px;
    color: #fff;
}
.bottom-block h1,.bottom-block h3{
    text-shadow: -1px 0 0 rgba(0,0,0,0.75);
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