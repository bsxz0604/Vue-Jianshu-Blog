<template>
    <ul class="article-list list-unstyled clearfix">
        <li v-for="article in articleList" class="article-item" :class="article.images.length > 0 ? 'have-img' : ''">
            <a v-if="article.images.length > 0" v-link="{ name: 'articleDetail', params: {aid: article._id } }" class="wrap-img">
                <img :src="article.images[0].url" />
            </a>
            <div>
              <p class="list-top">               
              <span class="time"><em>Nic.Li</em> · {{ article.publish_time }}</span>
              </p>
              <h4 class="title">
                <a v-link="{ name: 'articleDetail', params: {aid: article._id } }" class="link-title">{{article.title}}</a>
              </h4>
              <div class="list-footer">
                <span>阅读 {{article.visit_count}}</span>
                <span> · 评论 {{article.comment_count}}</span>        
                <span> · 喜欢 {{article.like_count}}</span>
              </div>
            </div>
        </li>
        <li v-if="articleList.length < 1" class="no-content">暂无数据</li>
    </ul>
</template>
<style scoped>
.article-list {
    margin-top: 35px;
}
.list-unstyled {
    padding-left: 0;
    list-style: none;
}
.article-list .article-item {
    display: list-item;
    float: left;
    width: 100%;
    padding-right: 2px;
    padding-bottom: 17px;
    margin-bottom: 17px;
    border-bottom-width: 1px;
    border-bottom-style: dashed;
    box-sizing: border-box;
    word-wrap: break-word;
    line-height: 1.5em;
    border-color: #d9d9d9;
}
em{
    color: #075b8d;
}
.article-list .have-img .wrap-img {
    float: right;
    width: 100px;
    height: 100px;
}
.article-list .have-img .wrap-img img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    box-sizing: border-box;
}
.article-list .list-top {
    margin: 8px 0;
    font-size: 12px;
}
.article-list .title {
    margin-right: 10px;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
}
a.link-title {
    color: #555;
}
.article-list .list-footer {
    font-size: 12px;
    line-height: 1.5;
}
</style>
<script>
    export default{
        ready(){
            
        },
        data(){
            return{
                articleList:[
                    {_id:1,publish_time:"3月前",title:"测试文章1",visit_count:10,comment_count:10,like_count:0,images:[]},
                    {_id:4,publish_time:"3月前",title:"测试文章4",visit_count:10,comment_count:10,like_count:0,images:[{url:'/static/1.jpg'}]},
                    {_id:4,publish_time:"3月前",title:"测试文章4",visit_count:10,comment_count:10,like_count:0,images:[{url:'/static/2.jpg'}]},
                    {_id:4,publish_time:"3月前",title:"测试文章4",visit_count:10,comment_count:10,like_count:0,images:[{url:'/static/3.jpg'}]},
                    {_id:1,publish_time:"3月前",title:"测试文章1",visit_count:10,comment_count:10,like_count:0,images:[]},
                    {_id:2,publish_time:"3月前",title:"测试文章2",visit_count:10,comment_count:10,like_count:0,images:[]},
                    {_id:3,publish_time:"3月前",title:"测试文章3",visit_count:10,comment_count:10,like_count:0,images:[]},
                    {_id:1,publish_time:"3月前",title:"测试文章1",visit_count:10,comment_count:10,like_count:0,images:[]},
                    {_id:2,publish_time:"3月前",title:"测试文章2",visit_count:10,comment_count:10,like_count:0,images:[]},
                    {_id:3,publish_time:"3月前",title:"测试文章3",visit_count:10,comment_count:10,like_count:0,images:[]},
                    {_id:2,publish_time:"3月前",title:"测试文章2",visit_count:10,comment_count:10,like_count:0,images:[]},
                    {_id:3,publish_time:"3月前",title:"测试文章3",visit_count:10,comment_count:10,like_count:0,images:[]}
                    
                ],
                
            }
        },
        methods:{
        },
    }
</script>