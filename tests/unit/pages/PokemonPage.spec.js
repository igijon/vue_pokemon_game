import { shallowMount, mount } from '@vue/test-utils' 
import PokemonPage from '@/pages/PokemonPage'
import { pokemons } from '../mocks/pokemons.mock'

describe('PokemonPage component', () => {

    let wrapper
    let mixPokemonArraySpy

    beforeEach(() => {
        jest.clearAllMocks()
        mixPokemonArraySpy = jest.spyOn( PokemonPage.methods, 'mixPokemonArray' )
        wrapper = shallowMount( PokemonPage )

    })

    /*
    No merece la pena el match con el snapshot porque si no hay pokemon sólo renderiza el h2 de espere por favor
    */
    test('debe hacer match con el snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('debe llamar mixPokemonArray al montar', () => {

        expect( mixPokemonArraySpy ).toHaveBeenCalled()

    })

    test('debe hacer match con snapshot cuando cargan los pokemons', () => {
        
        
        const wrapper = shallowMount( PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false, 
                    showAnswer: false,
                    message: '',
                }
            }
        } )

        expect( wrapper.html() ).toMatchSnapshot()

    })

    test('debe mostrar los componentes de PokemonPicture y PokemonOptions', () => {
        /* PokemonPicture y PokemonOptions debenn existir */
        const wrapper = shallowMount( PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false, 
                    showAnswer: false,
                    message: '',
                }
            }
        } )

        const picture = wrapper.find('pokemon-picture-stub')
        const options = wrapper.find('pokemon-options-stub')
        expect( picture.exists()).toBeTruthy()
        expect( options.exists()).toBeTruthy()

        //PokemonPicture debe tener el atributo pokemonId === 5

        expect( picture.attributes('pokemonid')).toBe('5')
        expect( options.attributes('pokemons')).toBeTruthy()
        //PokemonOptions attribute pokemons toBe true

    })

    test('pruebas con checkAnswer', async () => {

        const wrapper = shallowMount( PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false, 
                    showAnswer: false,
                    message: '',
                }
            }
        } )

        //Al hacer esto, literalmente lo estoy ejecutando
        await wrapper.vm.checkAnswer(5) //Tenemos que hacer un await porque hay que esperar a que vue haga todo el renderizado del DOM
        //Debería aparecer el mensaje correcto porque el correcto es el 5
        expect(wrapper.find('h2').exists()).toBeTruthy()
        expect(wrapper.vm.showPokemon).toBeTruthy()
        expect(wrapper.find('h2').text()).toBe(`Correcto, ${ pokemons[0].name }`)

        await wrapper.vm.checkAnswer(10)
        expect(wrapper.vm.message).toBe(`Oooops, era ${pokemons[0].name}`)



    })
})