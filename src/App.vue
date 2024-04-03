<script >
import Main from './components/Main.vue'
import Header from './components/Header.vue';
import { store } from './components/data/store';
import axios from 'axios';


export default {
  components:{
    Main,
    Header,

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
        console.log(res.data)
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
    <Main /></div>

</template>

<style lang="scss" scoped>
@use './assets/scss/main.scss'

</style>
