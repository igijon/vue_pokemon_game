import { getPokemons, getPokemonNames } from '@/helpers/getPokemonOptions'


//yarn test:unit getPokemonOptions
describe('getPokemonOptions helpers', () => {

    test('debe devolver un array de números', () => {

        const pokemons = getPokemons()

        expect ( pokemons.length ).toBe(650)
        expect ( pokemons[0] ).toBe(1)
        expect ( pokemons[500] ).toBe(501)
        expect ( pokemons[649] ).toBe(650)

    })

    test('debe devolver un array de 4 elementos con nombres de pokemons', () => {
        const pokemons = getPokemonNames([1,2,3,4])
        //Con esto debe aparecer una promesa pendiente de resolver
        console.log(pokemons);
    })

    test('debe devolver un array mezclado', () => {

    })

})