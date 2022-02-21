const getPokemons = () => {
    const pokemonsArr = Array.from(Array(650))
    return pokemonsArr.map(( _ , index ) => index+1)
}

const getPokemonNames = (pokemons = []) => {
    console.log(pokemons);
}
const getPokemonOptions = () => {
    const mixedArr = getPokemons().sort( () => Math.random() - 0.5 )
    getPokemonNames( mixedArr.splice(0,4))
}


export default getPokemonOptions
