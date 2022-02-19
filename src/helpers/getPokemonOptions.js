
import pokemonApi from "../api/pokemonApi"

const getPokemons = () => {

    const pokemonsArr = Array.from ( Array(650) )
    //Quiero recorrer los elementos y colocarles el valor que va desde 1 hasta 651
    return pokemonsArr.map( ( _ , index ) => index +1 )

}

const getPokemonOptions = () => {
    
    //Necesito poder mezclar el array
    const mixedPokemons = getPokemons().sort( () => Math.random() - 0.5  )
    getPokemoNames( mixedPokemons.splice(0,4) ) //Sólo quiero enviar los primeros 4 pokemons para montar los nombres

}

const getPokemoNames = async ( [a,b,c,d] = [] ) => {

    //Vamos a añadir axios => yarn add axios
    //Vamos a tener este API https://pokeapi.co/
    // const resp = await pokemonApi.get(`/1`)
    
    // console.log(resp.data.name, resp.data.id)

    const promiseArr = [
        pokemonApi.get(`/${ a }`),
        pokemonApi.get(`/${ b }`),
        pokemonApi.get(`/${ c }`),
        pokemonApi.get(`/${ d }`)
    ]
    //Permite disparar muchas promesas simultáneamente
    const respuestas = await Promise.all( promiseArr )
    console.log(respuestas);
     
}


export default getPokemonOptions