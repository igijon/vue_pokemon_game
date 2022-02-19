<template>
  <div class="pokemon-container">
    <img
      :src="imgSrc"
      class="hidden-pokemon"
      alt="pokemon"
    />
    <img v-if="pokemonId"
      :src="imgSrc"
      class="fade-in"
      alt="pokemon"
    />
  </div>
</template>

<script>
export default {

  props: {
    pokemonId: {
      type: Number,
      required: true
    },
    showPokemon: {
      type: Boolean,
      required: true,
      default: false //Esto es para tener más control por si se le asigna un valor pero no como yo quiero
    }
  },
  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ this.pokemonId }.svg`
    }
  }

}
</script>


<!-- Para que sólo se aplique a un componente tenemos que poner scoped-->
<style scoped>
.pokemon-container {
  height: 200px;
}
img {
  height: 200px;
  position: absolute; /*Esto hace que las dos quedan montadas*/
  right: 32%;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
.hidden-pokemon {
  filter: brightness(0);
}
</style>