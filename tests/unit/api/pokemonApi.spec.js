import pokemonApi from '@/api/pokemonApi'

//Ejecutar tests con yarn test:unit
//Comprobamos si nuestra isntancia de axios está bien configurada
describe('pokemonApi', () => {

    test('axios debe estar configurado', () => {

        expect( pokemonApi.defaults.baseURL ).toBe( 'https://pokeapi.co/api/v2/pokemon' )

    })

})