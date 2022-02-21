import { shallowMount, mount } from '@vue/test-utils' 
import PokemonPage from '@/components/PokemonPage'

describe('PokemonPage component', () => {

    let wrapper

    beforeEach(() => {

        wrapper = shallowMount( PokemonPage )

    })

    /*
    No merece la pena el match con el snapshot porque si no hay pokemon sólo renderiza el h2 de espere por favor
    */
    test('debe hacer match con el snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('debe llamar mixPokemonArray al montar', () => {

        //Cuando hago el espía, el componente está montado y ya se ha disparado
        const mixPokemonArraySpy = jest.spyOn( PokemonPage.methods, 'mixPokemonArray' )
        expect( mixPokemonArraySpy ).toHaveBeenCalled()

    })
})