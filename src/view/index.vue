<template>
    <div class="body">
        <v-Nav></v-Nav>
        <div class="container-fluid main-box">
            <div class="row">
                <v-Sidebar></v-Sidebar>
                <div class="col-sm-9 col-sm-offset-3 main-content">
                    <v-Tag></v-Tag>
                    <v-article></v-article>
                </div>
            </div>
        </div>
        <v-Footer></v-Footer>
    </div>
</template>
<style scoped>
    .body{
        width:100%;
        height:100%;
    }
    .main-box{
        padding-left:0;
        padding-right:0;
    }
    .row{
        padding:0;
        margin:0;
    }
    .main-content {
        /* background-color:pink; */
        padding-top: 50px;
        min-height: 400px;
    }
    @media (min-width: 768px){
        .main-box {
            padding-left: 45px;
        }
    }
    @media (min-width: 768px){
        .main-content {
            padding-top: 10px;
            padding-left: 35px;
        }
    }
</style>
<script>
    import vNav from '../components/nav.vue'
    import vSidebar from '../components/index/sidebar.vue'
    import vTag from '../components/index/tags.vue'
    import vArticle from '../components/index/articles.vue'
    import vFooter from '../components/index/footer.vue'


    export default{
        ready(){
            
        },
        data(){
            return{
                
            }
        },
        components:{
            vNav:vNav,
            vSidebar:vSidebar,
            vTag:vTag,
            vArticle:vArticle,
            vFooter:vFooter,
        },
        methods:{
            
        },
    }
</script>