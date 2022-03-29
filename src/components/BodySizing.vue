<template>
  <div class="d-flex flex-column justify-content-between">

    <!-- Header -->
    <header class="header-container">
      <div class="title-container">
        <span>Guida alle taglie</span>
      </div>

      <div class="header-content">
        <span>Cm</span>
        <span>In</span>
      </div>
    </header>


    <!-- Main -->
    <main class="">
      <div class="container-main">
        <span>Altezza in </span>
        <Input />
      </div>
      <div class="container-main">
        <span>Peso in </span>
        <Input />
      </div>
      
    </main>
   

   <!-- Footer -->
    <footer>
      <Btn :text="'prosegui'" />
    </footer>
  
  </div>
</template>

<script>
import Btn from '@/components/Btn.vue'
import Input from '@/components/Input.vue'
export default {
  components: {
    Btn,
    Input
  },
  data () {
    return {
      height: '',
      weight: ''
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/styles/components/body-sizing.scss";

</style>