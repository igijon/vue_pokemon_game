<template>
  <div class="pokemon-container">
    <img
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
      class="hidden-pokemon"
      alt="pokemon"
    />
    <img
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
      class="fade-in"
      alt="pokemon"
    />
  </div>
</template>

<script>
export default {};
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