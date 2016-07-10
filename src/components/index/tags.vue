<template>
    <ul class="sort-tags list-unstyled clearfix">
        <li>
          <a class="active">最新</a><!-- :class="{'active':(options.sortName == 'publish_time')}"  -->
        </li>
        <li>
          <a >热门</a><!-- :class="{'active':(options.sortName == 'visit_count')}" -->
        </li>
        <li v-for="tag in tagList">
          <a >{{tag.name}}</a><!-- :class="{'active':(options.tagId == tag._id)}" -->
        </li>
    </ul>
</template>
<style scoped>
a {
    color: #999;
}
ul.sort-tags {
    padding-top: 13px;
}
.list-unstyled {
    padding-left: 0;
    list-style: none;
}
ul.sort-tags li {
    display: list-item;
    float: left;
    margin: 10px 15px 5px 0;
    line-height: 1.5em;
}
.sort-tags .active,.sort-tags a:hover {
    color: #fff;
    border-color: #e78170;
    background-color: #e78170;
}
ul.sort-tags li a {
    padding: 5px 10px;
    border-width: 1px;
    border-style: solid;
    border-radius: 14px;
    box-sizing: border-box;
    font-size: 12px;
    line-height: 1.5em;
}
</style>
<script>
    export default{
        ready(){
            
        },
        data(){
            return{
                tagList:[{name:"linux"},{name:"linux"},{name:"linux"},{name:"linux"}],
            }
        },
        methods:{
        },
    }
</script>