<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>
  <div v-else>
    <h1>¿Quién es este Pokémon?</h1>

    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer"/>
  </div>
</template>

<script>
import PokemonOptions from "../components/PokemonOptions.vue";
import PokemonPicture from "../components/PokemonPicture.vue";

import getPokemonOptions from "@/helpers/getPokemonOptions";

export default {
  name: "PokemonPage",
  components: {
    PokemonOptions,
    PokemonPicture,
  },
  data() {
    return {
      pokemonArr: [],
      pokemon: null, //Aquí tendremos el pokemon aleatorio que tenemos que adivinar en el juego
      showPokemon: false //Me permitirá determinar si muestro o no el pokemon
    };
  },
  methods: {
    //queremos que se llame cuando cargue, utilizaremos los hooks del
    //ciclo de vida de Vue
    async mixPokemonArray() {
      //Como tiene async es una promesa
      this.pokemonArr = await getPokemonOptions();

      const rndInt = Math.floor(Math.random() * 4); //Quiero un número entero entre 0 y 3
      this.pokemon = this.pokemonArr[rndInt];
      console.log(this.pokemon);
    },
    checkAnswer(pokemonId){
      //Cuando sólo queremos recoger el evento, no hace falta poner en el template ($event)
      console.log("Pokemon llamado: ", pokemonId)
    }
  },
  mounted() {
    this.mixPokemonArray();
  },
};
</script>

<style>
</style>