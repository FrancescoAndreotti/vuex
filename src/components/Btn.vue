<template>
    <div class="btn-container">
      <button class="my-btn-primary">
       <div class="btn-text">{{text}}</div> 
      </button>
    </div>
</template>

<script>
  export default {
   props: {
     text: String
   }
  }
</script>

<style lang="scss">
@import "../assets/styles/components/btn.scss";
</style>