<template>
<Row class="vm-login vm-panel">
  <Col span="10" class="login-form">
    <!--头部-->
    <div class="login-header">
      <img src="../assets/img/logo.png" height="80" alt="登录">
      <p><span>VUE</span>MANAGER</p>
    </div>
    <!--头部-->
    <div class="login-form">
      <Input v-model="username" placeholder="please enter your name" :autofocus="true"/>
       <Input v-model="password" type="password" placeholder="please enter your password"/>
       <Button type="primary">Login</Button>
    </div>
    <div class="login-footer">
       <Checkbox v-model="remenber">Remenber</Checkbox>
       <span class="forget"><a href="#">Forget Password</a></span>
    </div>
  </Col>
  <Col span="14" class="login-ad">
    <span class="phone-author">Phone: JURe Kravanja</span>
  </Col>
</Row>
</template>

<script>
  export default {
    name: 'VmLogin',
    data: function () {
      return {
        username: '',
        password: '',
        remenber: false
      }
    }
  }
</script>
