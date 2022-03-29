<template>
<div class="d-flex">
    
      <Btn @click="increment" :text="'Avanti'"></Btn>
    
  </div>
</template>


<script>
import Btn from '@/components/Btn.vue';

export default {
components: {
  Btn,
},
methods: {
  increment() {
    this.$store.dispatch('increment')
  },
  decrease() {
    this.$store.dispatch('decrease')
  }
}
}
</script>