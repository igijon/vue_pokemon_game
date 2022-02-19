<template>
  <h1>¿Quién es este Pokémon?</h1>

  <PokemonPicture :pokemonId="4" :showPokemon="true"/>
  <PokemonOptions/>
</template>

<script>
import PokemonOptions from '../components/PokemonOptions.vue'
//import PokemonOptions from '@/components/PokemonOptions.vue'. @ parte de src.
import PokemonPicture from '../components/PokemonPicture.vue'
export default {
    name: 'PokemonPage',
    components: {
        PokemonOptions,
        PokemonPicture
    }
}
</script>

<style>

</style>