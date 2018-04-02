<template>
    <div class="vm-lock-screen vm-panel">
      <div class="company">
          <img src="../assets/img/logo.png" height="18" alt="" title="">
          <span>WeChat</span>
      </div>
      <div class="user">
        <img src="../assets/img/photo.jpeg"  height="100" alt="" title="">
        <p class="name">Yuancheng Cao</p>
      </div>
      <Input  placeholder="Please enter code" type="password" :style="{width: 300 + 'px' }"></Input>
      <Button   type="primary" value="">Enter</Button>
    </div>
</template>

<script>
    export default {
      name: 'vm-lock-screen'
    }

</script>

<style scoped>

</style>
