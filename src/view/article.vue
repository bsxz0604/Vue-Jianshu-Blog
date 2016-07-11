<template>
<div>
  <v-Nav></v-Nav>
  <div class="article-box">
    <div class="article-container">
      <h1 class="title">{{ articleDetail.title }}</h1>
      <div class="counts">
        <span class="views-count">阅读{{articleDetail.visit_count}}</span>
        <span class="comments-count">评论{{articleDetail.comment_count}}</span>
        <span class="likes-count">喜欢{{articleDetail.like_count}}</span>
      </div> 
      <div class="markdown-content" v-html="articleDetail.content"></div>
    </div>
  </div>
</div>
</template>

<script>
import '../../static/article.css'
 import vNav from '../components/nav.vue'
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      articleDetail:{"_id":"55ceefafc6e998b817a930c8","title":"web服务器搭建之node+mongodb+nginx","content":"<p><img src=\"http://upload.jackhu.top/blog/article/1439625866486722793f11a2b9442b00108b9d7e848fa.png\" alt=\"enter image description here\" title=\"enter image title here\"></p>\n<h4>服务器系统:Ubuntu 12.04 64位</h4>\n<h3>一. nodejs安装</h3>\n<ul>\n<li>方法1 (先安装nodejs再安装多版本管理)</li>\n</ul>\n<pre><code>$ sudo apt-get install curl\n$ curl --silent --location https://deb.nodesource.com/setup_0.12 | sudo bash -\n$ sudo apt-get install --yes nodejs  \n$ sudo npm install -g n    //最后安装n,多版本管理\n</code></pre>\n<p>参考文章:<a href=\"https://github.com/joyent/node/wiki/installing-node.js-via-package-manager\">Installing Node.js via package manager</a></p>\n<ul>\n<li>方法2 (先安装多版本管理n)</li>\n</ul>\n<pre><code>$ sudo apt-get install curl\n$ sudo apt-get install make\n$ sudo curl -L http://git.io/n-install | bash  //会将n和nodejs 一起安装好.\n//重启服务器或者重新登录,环境变量才生效.\n</code></pre>\n<p>参考文章:<a href=\"https://github.com/tj/n\">https://github.com/tj/n</a><br>\n安装cnpm</p>\n<pre><code>sudo npm install -g cnpm --registry=https://registry.npm.taobao.org\n</code></pre>\n<ul>\n<li>方法3 (先安装多版本管理nvm)<br>\n<a href=\"https://github.com/creationix/nvm\">github 地址</a><br>\nnvm不支持windows,但有第三方维护的windows安装包.</li>\n</ul>\n<pre><code>$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.26.1/install.sh | bash\n$ nvm ls     //查看已经安装过的列表.\n$ nvm ls-remote  //查看有哪些可安装的版本.  \n$ nvm install &lt;version&gt;   //安装指定的版本.  \n$ nvm use &lt;version&gt;       //使用指定版本.  \n$ nvm alias default &lt;version&gt; //指定一个默认版本,这样每次打开shell,都是这个版本.否则会指向system版本.\n</code></pre>\n<blockquote>\n<p>mac安装注意:<br>\n由于mac不会读取~/.bashrc 需要编辑~/.bash_profile文件,添加一行.<br>\nif [ -f ~/.bashrc ]; then<br>\nsource ~/.bashrc<br>\nfi<br>\n然后运行: source ~/.bash_profile</p>\n</blockquote>\n<h3>二,mongodb安装</h3>\n<pre><code>$ sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10  \n$ echo &quot;deb http://repo.mongodb.org/apt/ubuntu &quot;$(lsb_release -sc)&quot;/mongodb-org/3.0 multiverse&quot; | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list  \n$ sudo apt-get update\n$ sudo apt-get install -y mongodb-org \n</code></pre>\n<blockquote>\n<p>默认日志文件放在: /var/log/mongodb  数据文件放在: /var/lib/mongod<br>\n可以修改配置文件: /etc/mongod.conf 来更改位置</p>\n</blockquote>\n<ul>\n<li>服务管理</li>\n</ul>\n<pre><code>$ sudo service mongod start\n$ sudo service mongod stop  \n$ sudo service mongod restart  \n</code></pre>\n<ul>\n<li>添加管理员,开启验证登录</li>\n</ul>\n<pre><code>$ mongo //进入mongodb shell管理\n$ use admin  \n$ db.createUser({user:’root’,pwd:’password’,roles:[&quot;root&quot;]})\n</code></pre>\n<p>修改配置文件:/etc/mongod.conf 将auth=true 前#号去掉.</p>\n<pre><code>$ sudo service mongod restart  //重启服务 \n$ mongo                        //再次进入shell管理\nshow dbs\n</code></pre>\n<p>这时会报错,提示需要验证.</p>\n<pre><code>use admin\ndb.auth('root','password');\n</code></pre>\n<p>显示1 表示验证成功.</p>\n<blockquote>\n<p>root权限是最高权限. 普通用户只需要readWrite<br>\n普通管理员的权限,一般有: readWrite, userAdmin , dbAdmin 或dbOwner</p>\n</blockquote>\n<p>关于权限参考文档:<a href=\"http://docs.mongodb.org/manual/reference/built-in-roles/\">http://docs.mongodb.org/manual/reference/built-in-roles/</a></p>\n<h3>三. nginx安装</h3>\n<p>修改配置文件: /etc/apt/sources.list 增加以下几行:<br>\ndeb http://nginx.org/packages/ubuntu/ precise nginx<br>\ndeb-src http://nginx.org/packages/ubuntu/ precise nginx</p>\n<p>下载 <a href=\"http://nginx.org/keys/nginx_signing.key\">nginx_signing.key</a><br>\n在当前目录下新建文件nginx_signing.key 将网页内容拷进去保存</p>\n<pre><code>$ sudo apt-key add nginx_signing.key\n$ sudo apt-get update\n$ sudo apt-get install nginx\n</code></pre>\n<p>服务管理:</p>\n<pre><code>$ service nginx status  //查看状态  \n$ sudo service nginx restart //重启  \n$ sudo service nginx stop //停止  \n$ sudo service nginx start //启动\n$ sudo service nginx reload //重新加载\n</code></pre>\n<p>配置:<br>\n安装完居然没有sites-enabled,和sites-available文件夹.<br>\n在/etc/nginx/ 目录下,新建两个文件夹: sites-enabled,sites-available<br>\n修改配置文件 : nginx.conf\n在 <code>include /etc/nginx/conf.d/*.conf;</code> 这行下面增加一行:\n<code>include /etc/nginx/sites-enabled/*;</code></p>\n<p>添加网站:<br>\n在sites-available目录下新建文件 <code>blogtest</code> ,内容如下:</p>\n<pre><code>server {\n        listen 80;\n        server_name www.blogtest.com blogtest.com;\n        access_log /var/log/nginx/blogtest.log;\n        location / {\n                proxy_set_header   X-Real-IP        $remote_addr;\n                proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;\n                proxy_set_header   Host             $http_host;\n                proxy_set_header   X-NginX-Proxy    true;\n                proxy_http_version 1.1;\n                proxy_pass http://127.0.0.1:3000;\n                proxy_redirect off;\n        }\n}\n</code></pre>\n<p>链接配置:</p>\n<pre><code>$ sudo ln -s /etc/nginx/sites-available/blogtest /etc/nginx/sites-enabled\n</code></pre>\n<p>重启服务</p>\n<pre><code>$ sudo service nginx restart\n</code></pre>\n<p>测试网站:</p>\n<pre><code>$ mkdir ~/www &amp;&amp; cd $_\n$ git clone https://github.com/hutufeia2009/angular-express-seed.git\n$ cd angular--express-seed\n$ sudo cnpm install\n$ node app.js\n</code></pre>\n<p>修改本机hosts文件,增加一条</p>\n<pre><code>服务器IP  www.blogtest.com\n</code></pre>\n<p>在浏览器输入www.blogtest.com<br>\n网站顺利打开.</p>\n","visit_count":1327,"comment_count":6,"like_count":6,"publish_time":"2015-09-09T03:42:33.182Z"}
    }
  },
  method:{
    
  },
  components:{
      vNav:vNav,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.article-box {
    width: 100%;
    margin: 0 auto;
    padding: 60px 10px 10px;
}
.article-container .title {
    word-break: break-all;
    font-size: 2.2em;
    font-weight: 700;
    line-height: 1.5;
}
.article-container .counts {
    margin: 20px 0;
}
.article-container .counts span {
    position: relative;
    top: 1px;
    margin-right: 10px;
    font-size: 12px;
}
@media (min-width: 768px){
.article-box {
    width: 700px;
    padding: 20px 0 10px 45px;
}
}

</style>
