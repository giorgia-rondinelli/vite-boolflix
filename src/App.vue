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

        store.movieList.forEach(item=>{
          
         
            store.vote.push(item.vote_average)
            
            console.log(this.store.vote)
          

        
        })
        
        
      })
      axios.get(this.store.apiUrlseries, {
        params:this.store.params
      })
      .then(res =>{
       
        this.store.seriesList=res.data.results
      
        console.log(this.store.seriesList)
      })
    
    },
    
    

  },
  mounted(){
   
    
  }

}

</script>

<template>
  <body>
    
  
    <div class="cont-main">
      <header>
      <Header />
      <Searchbar @startSearch="getApi " />
    </header>
      <Main />
  </div>
</body>
</template>

<style lang="scss" >
@use './assets/scss/main.scss';

body{

}
.cont-main{
height: 100%;
background: linear-gradient(#da3e3e 0%, #9198e5 100%);

}


</style>
