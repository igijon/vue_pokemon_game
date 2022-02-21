<template>
  <h1>¿Quién es este Pokemon?</h1>

  <PokemonPicture :pokemonId="17" :showPokemon="true"/>
  <PokemonOptions/>

</template>

<script>
import PokemonOptions from '../components/PokemonOptions.vue'
import PokemonPicture from '../components/PokemonPicture.vue'
import getPokemonOptions from '@/helpers/getPokemonOptions'

getPokemonOptions()

export default {
  components: { PokemonPicture, PokemonOptions },
}
</script>

<style>

</style>