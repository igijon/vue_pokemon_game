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
        const wrapper = shallowMount( PokemonPicture, {
            props: {
                pokemonId: 100,
                showPokemon: false
            }
        } )

        //Hay una imagen que no se va a mostrar por el v-else
        const [img1, img2] = wrapper.findAll('img')

        expect(img1.exists()).toBeTruthy()
        //expect(img2.exists()).toBeFalsy()
        expect(img2).toBe( undefined )

        console.log(img1.classes())
    })

    test('debe mostrar el pokemon si showPokemon está en true', () => {


    })
})