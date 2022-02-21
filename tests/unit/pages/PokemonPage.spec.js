import { shallowMount, mount } from '@vue/test-utils' 
import PokemonPage from '@/pages/PokemonPage'

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
})