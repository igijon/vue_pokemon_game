
const getPokemons = () => {

    const pokemonsArr = Array.from ( Array(650) )
    //Quiero recorrer los elementos y colocarles el valor que va desde 1 hasta 651
    return pokemonsArr.map( ( _ , index ) => index +1 )

}

const getPokemonOptions = () => {
    
    //Necesito poder mezclar el array
    const mixedPokemons = getPokemons().sort( () => Math.random() - 0.5  )
    getPokemonNames( mixedPokemons.splice(0,4) ) //Sólo quiero enviar los primeros 4 pokemons para montar los nombres

}

const getPokemoNames = (pokemons = [] ) => {

    console.log(pokemons)
     
}


export default getPokemonOptions