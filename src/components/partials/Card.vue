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
    fullStar(){
     
      return Math.round(this.voteAverage/2) 
    },
    emptyStar(){
      return Math.round(5- this.voteAverage/2 )

    }
  }  

    
   
 ,
  mounted(){

  
    
    

   
    
  }
}
</script>

<template>
  
  <div class=" card-sc col position-relative mb-2 ">
    <div class="movie position-absolute text-center text-white ">
    
      <div>{{ title }}</div>
      <div>{{ originalTitle }}</div>
      <img v-if="( originalLanguage=== 'en')" src="/public/en.png" alt="">
      <img v-else-if="( originalLanguage=== 'it')" src="/public/it.png" alt="">
      <img v-else-if="( originalLanguage=== 'fr')" src="/public/fr.png" alt="">
      <img v-else-if="( originalLanguage=== 'es')" src="/public/es.png" alt="">
      
    
      <div v-else>{{ originalLanguage }}</div>
      <div>
      <i v-for="(star,index) in fullStar()" :key="index" class="fa-solid fa-star"></i>
      <i v-for="(empty,index) in emptyStar()" :key="index" class="fa-regular fa-star"></i>
      </div>
    </div>  
  
    <div class="img-container">
      <img v-if="image=== null" src="/public/placeholder.png" alt="">
      <img v-else :src="`https://image.tmdb.org/t/p/w342${image }}`" alt="">
    </div>
  </div>
</template>

<style lang="scss" scoped>

.card-sc{
 
}
@keyframes slide{
  0%   {  top:100px;}
  
  100% {  top:0px;}
}

.movie{
  background-color: rgba(81, 74, 74, 0.717);
  width: 300px;
  height: 100%;
  display: none;
  animation-name: slide;
  animation-duration: 0.7s;
  border-radius: 20px;
 
  
  
 
 
  
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
    width: 300px;
    border-radius: 20px;
    height: 400px;
  }
  
}


</style>
