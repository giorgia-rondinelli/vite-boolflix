<script >
import Main from './components/Main.vue'
import Header from './components/Header.vue';
import { store } from './components/data/store';
import axios from 'axios';
import Searchbar from './components/partials/Searchbar.vue'


export default {
  components:{
    Main,
    Header,
    Searchbar

  },
  data(){
    return{
      store
    }
  },
  methods:{
    getApi(){
      
      axios.get(this.store.apiUrlMovies, {
        params:this.store.params
      })
      .then(res =>{
       
        this.store.movieList=res.data.results
      
        console.log(this.store.movieList)
      })
      axios.get(this.store.apiUrlseries, {
        params:this.store.params
      })
      .then(res =>{
       
        this.store.seriesList=res.data.results
      
        console.log(this.store.seriesList)
      })
    
    }

  },
  mounted(){
    this.getApi()
  }

}

</script>

<template>
  <div>
    <Header />
    <Searchbar @startSearch="getApi " />
    <Main /></div>

</template>

<style lang="scss" >
@use './assets/scss/main.scss'

</style>
