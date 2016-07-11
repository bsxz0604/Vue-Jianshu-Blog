<template>
<div>
<v-Nav></v-Nav>
<div class="signin-box">
  <div class="signin-container">
      <h4 class="title">登 录</h4>
      <div id="signinForm">
        <validator name="signinValidation">
          <form class="signin-form form-horizontal" novalidate>
              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-addon">
                    <i class="fa fa-envelope fa-fw"></i>
                  </div>
                  <input type="text" 
                    v-model="user.email" 
                    v-validate:email="{ required: true, minlength: 3, maxlength: 30, email:true }"
                    class="form-control"
                    :classes="{valid: 'ng-valid', invalid: 'ng-invalid'}" 
                    placeholder="邮箱" />
                </div>
              </div>
              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-addon"><i class="fa fa-lock fa-fw" aria-hidden="true"></i></i></div>
                  <input type="password" 
                    v-model="user.password" 
                    v-validate:password="{ required: true }"
                    class="form-control" 
                    :classes="{valid: 'ng-valid', invalid: 'ng-invalid'}" 
                    placeholder="密码" />
                </div>
              </div>
              <div class="form-group">
                <button class="btn btn-primary btn-lg btn-block" type="submit" id="signin_btn" :disabled="$signinValidation.invalid">登 录</button>
              </div>
          </form>
        </validator>
      </div>
  </div>
</div>
</div>
</template>
<style scoped>
.signin-box {
    width: 100%;
    margin: 0 auto;
    padding: 60px 10px 10px;
}
.signin-box .title {
    margin: 25px auto;
    text-align: center;
}
.signin-form {
    max-width: 300px;
    padding-bottom: 40px;
    margin: 0 auto 25px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-color: #d9d9d9;
}
@media (min-width: 768px){
  .signin-box {
      width: 700px;
      padding: 50px 0 10px 45px;
  }
}
input.ng-invalid {
  color: #e78170;
}

input.ng-valid{
  color: #5cb85c;
}
</style>
<script>
import vNav from '../components/nav.vue'
export default {
  el (){
    return '#signinForm'
  },
  validators: { 
    email: function (val) {
      return /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test(val)
    }
  },
  data () {
    return {
      user:{
        email:'',
        password:'',
        captcha:''
      }
    }
  },
  components:{
      vNav:vNav,
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

