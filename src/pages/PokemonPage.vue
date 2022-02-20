<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>
  <div v-else>
    <h1>¿Quién es este Pokémon?</h1>

    <pokemon-picture
      :pokemonId="pokemon.id"
      :showPokemon="showPokemon"
    ></pokemon-picture>
    <PokemonOptions :pokemons="pokemonArr" @selected-pokemon="checkAnswer" />
    
  </div>

  <div v-if="showAnswer">
    <h2 class="fade-in">{{ message }}</h2>
    <button @click="newGame">Nuevo juego</button>
  </div>
</template>

<script>
import PokemonOptions from "../components/PokemonOptions.vue"
import PokemonPicture from "../components/PokemonPicture.vue"

import getPokemonOptions from "@/helpers/getPokemonOptions"

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
      showPokemon: false, //Me permitirá determinar si muestro o no el pokemon
      showAnswer: false,
      message: '',
    };
  },
  methods: {
    //queremos que se llame cuando cargue, utilizaremos los hooks del
    //ciclo de vida de Vue
    async mixPokemonArray() {
      //Como tiene async es una promesa
      this.pokemonArr = await getPokemonOptions()

      const rndInt = Math.floor(Math.random() * 4) //Quiero un número entero entre 0 y 3
      this.pokemon = this.pokemonArr[rndInt]
      console.log(this.pokemon)
    },

    checkAnswer(selectedId) {
      this.showPokemon = true
      this.showAnswer = true

      if (selectedId == this.pokemon.id) {
        this.message = `Correcto, ${this.pokemon.name}`
      } else {
        this.message = `Oooops, era ${this.pokemon.name}`
      }
    },

    newGame(){
      this.showPokemon = false
      this.showAnswer = false
      this.pokemonArr = []
      this.pokemon = null //Es el que mantiene la imagen
      this.mixPokemonArray()
    }
  },
  mounted() {
    this.mixPokemonArray()
  },
}
</script>

<style>
</style>