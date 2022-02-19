<template>
  <h1>¿Quién es este Pokémon?</h1>

  <PokemonPicture :pokemonId="151" :showPokemon="true"/>
  <PokemonOptions/>
</template>

<script>
import PokemonOptions from '../components/PokemonOptions.vue'
import PokemonPicture from '../components/PokemonPicture.vue'

import getPokemonOptions from '@/helpers/getPokemonOptions'

getPokemonOptions()

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