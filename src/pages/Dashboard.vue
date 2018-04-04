<template>
 <div class="dashboard">
   <Row :gutter="16">
     <Col span="6">
         <VmStateOverView color="#41b883" icon="fa fa-user" title="NewUsers" count="996"></VmStateOverView>
     </Col>
     <Col span="6">
     <VmStateOverView color="#1d8ce0" icon="fa fa-eye" title="Page Views" count="896"></VmStateOverView>
     </Col>
   </Row>
 </div>
</template>

<script>
  import VmStateOverView from '@/components/vm-state-overview.vue'
  export default {
    name: 'Dashboard',
    components: {
      VmStateOverView
    }
  }
</script>

<style scoped>

</style>
