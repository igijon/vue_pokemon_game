import { shallowMount } from '@vue/test-utils'
import PokemonPicture from '@/components/PokemonPicture'

describe('PokemonPicture component', () => {

    test('debe hacer match con snapshot', () => {

        //Lo monto dentro del test porque hacen falta propiedades 
        const wrapper = shallowMount( PokemonPicture, {
            props: {
                pokemonId: 1,
                showPokemon: false
            }
        } )

        expect( wrapper.html() ).toMatchSnapshot()

    })

    test('debe mostrar la imagen oculta y el pokemon 100', () => {

    })

    test('debe mostrar el pokemon si showPokemon está en true', () => {


    })
})