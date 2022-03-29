<template>
  <div>
    <transition name="fade" mode="out-in">

    <!-- Counter -->
      <div v-if="count === 2"><Counter class="d-flex justify-content-center align-items-center" /></div>
    
    <!-- BodySizing Component -->
     <div v-else-if="count === 1"><BodySizing  /></div>
    </transition>
     
    
  </div>
</template>

<script>
// @ is an alias to /src
import Counter from '@/components/Counter.vue'
import BodySizing from '@/components/BodySizing.vue'
//import Btn from '@/components/Btn.vue'
import store from "../store";

export default {
  name: 'Home',
  components: {
    Counter,
    BodySizing,
    //Btn
  },
  computed: {
      count() {
        return store.state.count
      }
  },
  
  methods: {

  }
}
</script>


<style scoped lang="scss">
.counter{
  height: 90vh;
  font-weight: bold;
  font-size: 30px
}


.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>