<template>
  <img
    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
    class="hidden-pokemon"
    alt="pokemon"
  />
  <!--Si hacemos drag sería una pista del pokemon que hay-->
  <img
    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
    class="fade-in" 
    alt="pokemon"
  />
</template>

<script>
export default {};
</script>

<!-- Para que sólo se aplique a un componente tenemos que poner scoped-->
<style scoped> 
.hidden-pokemon {
    filter: brightness(0);
}
</style>