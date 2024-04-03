<script >
import {store} from '../data/store'
export default {
  data(){
    return{
      store
    }
  },
  props:{
    title:String,
    originalTitle:String,
    originalLanguage:String,
    voteAverage: Number


  }
}
</script>

<template>
  
  <div class="col-3 movie">
    
    <div>{{ title }}</div>
    <div>{{ originalTitle }}</div>
    <div>{{ originalLanguage }}</div>
    <div>{{ voteAverage }}</div>
  </div>

</template>

<style lang="scss" scoped>
.movie{
  border: 1px solid black;
 
  

}


</style>
