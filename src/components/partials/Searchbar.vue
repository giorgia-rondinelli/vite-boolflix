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
  <div class="container mb-3 text-center ">
  
  <input @keyup.enter="startSeach" type="text" v-model="store.params.query">
  <button @click="startSeach">cerca </button>
  </div>
</template>

<style lang="scss" scoped>


</style>
