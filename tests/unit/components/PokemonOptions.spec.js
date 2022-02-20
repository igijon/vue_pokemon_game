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

        const [ li1, li2, li3, li4 ] = wrapper.findAll('li')

        li1.trigger('click') //No tengo que poner await todavía porque no necesito esperar la renderización

        console.log(wrapper.emitted('selectedPokemon'))
        //Mostrará un array con todos los argumentos con los que se emitió, en este caso sólo uno
        //el id que en este caso es el 5
        
        //compruebo que se emitió una vez
        expect( wrapper.emitted('selectedPokemon').length).toBe(1)
        //Voy a comprobar si se emitió con el valor correcto
        expect( wrapper.emitted('selectedPokemon')[0]).toEqual([5])
        //No puedo usar toBe para igualar  []===[] ni {}==={}, habría que usar toEqual por ejemplo
    })

})
