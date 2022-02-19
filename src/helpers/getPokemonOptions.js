
const getPokemons = () => {

    const pokemonsArr = Array.from ( Array(650) )
    //Quiero recorrer los elementos y colocarles el valor que va desde 1 hasta 651
    return pokemonsArr.map( ( _ , index ) => index +1 )

}

const getPokemonOptions = () => {
    
    //Necesito poder mezclar el array
    const mixedPokemons = getPokemons().sort( () => Math.random() - 0.5  )
    console.log(mixedPokemons)

}


export default getPokemonOptions