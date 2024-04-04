<script >

import {store} from './data/store'



 export default {
  
  data(){
    return{
      store
    }
  }
}
</script>

<template>
  <header class=" text-left d-flex align-items-center  ">
  <h1 class=" ms-3 ">BOOLFILX</h1>
  
  </header>

</template>

<style lang="scss" scoped>
header{
  background-color: rgb(34, 34, 70);
  height: 70px;
  h1{
    color: rgb(218, 24, 24);
  }
}

</style>
