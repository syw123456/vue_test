<template>
   <div class="home">
      <Row class="header" type="flex" align="middle">
        <div class="logo">
          <img src="../assets/img/logo.png" height="30" alt="">
          <span>VUE</span>MANAGER <Tag>beta</Tag><Tag v-if="show" closable @on-close="handleClose">close</Tag>
        </div>
        <VmMsgPush style="margin-left: 20px" :data="msgPushData"></VmMsgPush>
        <Dropdown class="login-info" placement="bottom-end">
          <Button type="ghost">
             <img src="../assets/img/photo.jpg" height="30" alt="">Admin
             <Icon type="arrow-down-b"></Icon>
          </Button>
          <Dropdown-menu slot="list">
            <Dropdown-item divided><i class="fa fa-key"></i>Log out</Dropdown-item>
            <Dropdown-item divided><i class="fa fa-cog"></i>Setting</Dropdown-item>
          </Dropdown-menu>

        </Dropdown>
      </Row>
   </div>
</template>
<script>
    import VmMsgPush from '@/components/vm-msg-push.vue'
    export default {
      name: 'home',
      components: {
        VmMsgPush
      },
      data () {
        return {
          show: true,
          msgPushData: [
            {
              image: require('@/assets/img/photo.jpg'),
              from: 'JesseLuo',
              time: '2017-01-08',
              message: 'I like your website very much'
            },
            {
              image: require('@/assets/img/photo.jpg'),
              from: 'JesseLuo',
              time: '2017-1-8',
              message: 'I like your website very much!'
            },
            {
              image: require('@/assets/img/photo.jpg'),
              from: 'JesseLuo',
              time: '2017-1-8',
              message: 'I like your website very much!'
            },
            {
              image: require('@/assets/img/photo.jpg'),
              from: 'JesseLuo',
              time: '2017-1-8',
              message: 'I like your website very much!'
            },
            {
              image: require('@/assets/img/photo.jpg'),
              from: 'JesseLuo',
              time: '2017-1-8',
              message: 'I like your website very much!'
            }
          ]
        }
      },
      methods: {
        handleClose () {
          this.show = false
        }
      }
    }
</script>

<style scoped>

</style>
