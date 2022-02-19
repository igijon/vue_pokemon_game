
import pokemonApi from "../api/pokemonApi"

const getPokemons = () => {

    const pokemonsArr = Array.from ( Array(650) )
    //Quiero recorrer los elementos y colocarles el valor que va desde 1 hasta 651
    return pokemonsArr.map( ( _ , index ) => index +1 )

}

const getPokemonOptions = async () => {
    
    //Necesito poder mezclar el array
    const mixedPokemons = getPokemons().sort( () => Math.random() - 0.5  )
    const pokemons = await getPokemoNames( mixedPokemons.splice(0,4) ) //Sólo quiero enviar los primeros 4 pokemons para montar los nombres
    console.table(pokemons);
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
    const [ p1, p2, p3, p4 ] = await Promise.all( promiseArr )
    
    return [
        { name: p1.data.name, id: p1.data.id },
        { name: p2.data.name, id: p2.data.id },
        { name: p3.data.name, id: p3.data.id },
        { name: p4.data.name, id: p4.data.id }
    ]
     
}


export default getPokemonOptions