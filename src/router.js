export default function (router) {
    router.map({
        'index': {
            name:'index',
            component: function (resolve) {
              require(['./view/index.vue'], resolve)
            }
        },
        'article/:aid': {
            name:'articleDetail',
            component: function (resolve) {
              require(['./view/article.vue'], resolve)
            }
        },
        'login': {
            name:'login',
            component: function (resolve) {
              require(['./view/login.vue'], resolve)
            }
        },
        '*': {
            name:'404',
            component: function (resolve) {
              require(['./view/nofound.vue'], resolve)
            }
        },
        
    })
    // router.redirect({
    //   '*': '/index'
    // })
    // router.beforeEach(function (transition) {})
    router.afterEach(function ({to}) {
        console.log(`成功浏览到:${to.path}`)
    })
}