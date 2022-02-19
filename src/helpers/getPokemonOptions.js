
const getPokemons = () => {

    const pokemonsArr = Array.from ( Array(650) )
    //Quiero recorrer los elementos y colocarles el valor que va desde 1 hasta 651
    return pokemonsArr.map( ( _ , index ) => index +1 )

}

const getPokemonOptions = () => {
    
    console.log(getPokemons())

}


export default getPokemonOptions