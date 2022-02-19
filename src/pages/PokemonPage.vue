<template>
  <h1>¿Quién es este Pokémon?</h1>

  <PokemonPicture :pokemonId="151" :showPokemon="true"/>
  <PokemonOptions :pokemons="pokemonArr"/>
</template>

<script>
import PokemonOptions from '../components/PokemonOptions.vue'
import PokemonPicture from '../components/PokemonPicture.vue'

import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
    name: 'PokemonPage',
    components: {
        PokemonOptions,
        PokemonPicture
    }, 
    data() {
      return {
        pokemonArr: []
      }
    },
    methods: {
      //queremos que se llame cuando cargue, utilizaremos los hooks del 
      //ciclo de vida de Vue
      async mixPokemonArray() {
        //Como tiene async es una promesa 
        this.pokemonArr = await getPokemonOptions()
        console.log( this.pokemonArr )
        //Esta información sale distinta porque es una propiedad reactiva
      }
    },
    mounted() {
      this.mixPokemonArray()
    }
}
</script>

<style>

</style>