<script >
import {store} from '../data/store'
export default {
  data(){
    return{
      store
    }
  },
  methods:{
    startSeach(){
      this.$emit('startSearch')
      this.store.params.query=''

    }

  }
}
</script>

<template>
  <div class=" searchbar ">
  
  <input @keyup.enter="startSeach" type="text" v-model="store.params.query">
  <button @click="startSeach">Cerca </button>
  </div>
</template>

<style lang="scss" scoped>
.searchbar{

  position: absolute;
  top:20px;
  right: 20px;
  input{
   
    border-radius: 20px;
    margin-right: 10px;
  }
  button{
   
    font-weight:700;
    
    
  }
}


</style>
