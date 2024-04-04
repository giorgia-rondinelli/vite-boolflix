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
  },
  methods:{

  },
  mounted(){
   
  }
}
</script>

<template>
  <div class="container ">
    <div class="row d-flex ">
      
        <h3 v-show="store.movieList.length>0">Film</h3>
        <Card v-for=" card in store.movieList" :key="card.id"
        :title="card.title"
        :originalTitle="card.original_title"
        :originalLanguage="card.original_language"
        :voteAverage="card.vote_average"
        :image="card.poster_path"

        />
        <h3 v-show="store.seriesList.length>0"> Serie tv</h3>
        <Card v-for=" card in store.seriesList" :key="card.id"
        :title="card.name"
        :originalTitle="card.original_name"
        :originalLanguage="card.original_language"
        :voteAverage="card.vote_average"
        :image="card.poster_path"
        />
     
    </div>
 </div>

</template>

<style lang="scss" scoped>


</style>
