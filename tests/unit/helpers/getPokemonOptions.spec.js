import getPokemonsOptions, { getPokemons, getPokemonNames } from '@/helpers/getPokemonOptions'
//La exportación por defecto va fuera de las llaves

//yarn test:unit getPokemonOptions
describe('getPokemonOptions helpers', () => {

    test('debe devolver un array de números', () => {

        const pokemons = getPokemons()

        expect ( pokemons.length ).toBe(650)
        expect ( pokemons[0] ).toBe(1)
        expect ( pokemons[500] ).toBe(501)
        expect ( pokemons[649] ).toBe(650)

    })

    test('debe devolver un array de 4 elementos con nombres de pokemons', async () => {
        const pokemons = await getPokemonNames([1,2,3,4])
        //Con esto debe aparecer una promesa pendiente de resolver
        expect( pokemons.length).toBe(4)
        expect( pokemons ).toStrictEqual([ //No podemos usar toBe porque esto también compara referencias de objetos
            { name: 'bulbasaur', id: 1 },
            { name: 'ivysaur', id: 2 },
            { name: 'venusaur', id: 3 },
            { name: 'charmander', id: 4 }
        ])
    })

    test('getPokemonOptions debe devolver un array mezclado', async () => {

        const pokemons = await getPokemonsOptions()
        console.log(pokemons)
    })

})