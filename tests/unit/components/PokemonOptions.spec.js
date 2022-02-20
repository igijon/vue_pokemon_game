import { shallowMount } from "@vue/test-utils";
import PokemonOptions from "@/components/PokemonOptions";

import { pokemons } from "../mocks/pokemons.mock";
//Con yarn test:unit /PokemonOptions sólo hace de ese componente, si no ponemos / ejecuta también
//los test de getPokemonOptions
describe("PokemonOptions component", () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(PokemonOptions, {
            props: {
                //pokemons:pokemon
                pokemons,
            }
        })
    })

    test("debe hacer match con snapshot", () => {
    
        expect(wrapper.html()).toMatchSnapshot()
  
    })

    test('debe mostrar las cuatro opciones correctamente', () => {
        
        const liTags = wrapper.findAll('li')

        expect( liTags.length ).toBe(4)
        expect( liTags[0].text() ).toBe('pikachu')
        expect( liTags[1].text() ).toBe('charmander')
        expect( liTags[2].text() ).toBe('venusaur')
        expect( liTags[3].text() ).toBe('mew')
    })

    test('debe emitir "selection" con sus respectivos parámetros al hacer click', () => {


    })

})
