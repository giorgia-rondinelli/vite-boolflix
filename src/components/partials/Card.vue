<script >
import {store} from '../data/store'
export default {
  data(){
    return{
      store,
      
    }
  },
  props:{
    title:String,
    originalTitle:String,
    originalLanguage:String,
    voteAverage: Number


  },
  methods:{
   
  }
}
</script>

<template>
  
  <div class="col-3 movie">
    
    <div>{{ title }}</div>
    <div>{{ originalTitle }}</div>
    <img v-if="( originalLanguage=== 'en')" src="/public/en.png" alt="">
    <img v-else-if="( originalLanguage=== 'it')" src="/public/it.png" alt="">
    <img v-else-if="( originalLanguage=== 'fr')" src="/public/fr.png" alt="">
    <img v-else-if="( originalLanguage=== 'es')" src="/public/es.png" alt="">
    
  
    <div v-else>{{ originalLanguage }}</div>
    <div>{{ voteAverage }}</div>
  </div>

</template>

<style lang="scss" scoped>
.movie{
  border: 1px solid black;
  img{
    width: 100px;;
    height: 70px;
  }
 
  

}


</style>
