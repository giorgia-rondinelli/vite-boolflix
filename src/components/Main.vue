<script >
import {store} from './data/store'
import Card from './partials/Card.vue';
export default {
  components:{
    Card


  },
  data(){
    return{
      store
    }
  }
}
</script>

<template>
  <div class="container ">
    <div class="row ">
      
      
        <Card v-for=" card in store.movieList" :key="card.id"
        :title="card.title"
        :originalTitle="card.original_title"
        :originalLanguage="card.original_language"
        :voteAverage="card.vote_average"
        />
        <div> serie tv</div>
        <Card v-for=" card in store.seriesList" :key="card.id"
        :title="card.name"
        :originalTitle="card.original_name"
        :originalLanguage="card.original_language"
        :voteAverage="card.vote_average"
        />
     
    </div>
 </div>

</template>

<style lang="scss" scoped>


</style>
