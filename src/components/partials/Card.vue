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
    voteAverage: Number,
    image:String


  },
  methods:{
   
    
  
    
   
  },
  mounted(){
    
    
  }
}
</script>

<template>
  
  <div class=" card-sc col position-relative m-1 ">
    <div class="movie position-absolute text-center text-white ">
    
      <div>{{ title }}</div>
      <div>{{ originalTitle }}</div>
      <img v-if="( originalLanguage=== 'en')" src="/public/en.png" alt="">
      <img v-else-if="( originalLanguage=== 'it')" src="/public/it.png" alt="">
      <img v-else-if="( originalLanguage=== 'fr')" src="/public/fr.png" alt="">
      <img v-else-if="( originalLanguage=== 'es')" src="/public/es.png" alt="">
      
    
      <div v-else>{{ originalLanguage }}</div>
      <div >{{ voteAverage }}</div>
      
    </div>  
  
    <div class="img-container">
      <img v-if="image=== null" src="/public/placeholder.png" alt="">
      <img v-else :src="`https://image.tmdb.org/t/p/w342${image }}`" alt="">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.movie{
  background-color: rgba(81, 74, 74, 0.717);
  width: 342px;
  height: 100%;
  display: none;
  
 
 
  
  div{
    margin: 20px;
  }
  img{
    width: 100px;;
    height: 70px;
  }
 
 
  

}
.card-sc:hover .movie{
  display: block;
}


.img-container{
  width: 300px;
  img{
    object-fit: cover;
    max-width: 342px;
  }
}


</style>
