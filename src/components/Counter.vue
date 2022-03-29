<template>
  <div class="counter" >Counter: {{count}}</div>
</template>

<script>
import store from "../store";

export default {
  
  computed: {
      count() {
        return store.state.count
      },
    },
    methods: {
       increment() {
        console.log('+1')
        this.$store.dispatch('increment')
        console.log(this.$store.state.count)
  }, 
      
    }
  }

</script>

<style lang="sss" scoped>
 
</style>>

