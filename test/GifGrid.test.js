import {render , screen , fireEvent} from '@testing-library/react'
import React from 'react'
import {GifGrid} from '../src/components/GifGrid'
import { useFetchGifs } from '../src/hooks/useFetchGifs';

//component to test
jest.mock('../src/hooks/useFetchGifs'); // creamos un mock

describe('Test al componente GifGrid',()=>{

//init const or props
    const category = 'One Punch'

    test('Debe mostrar el loading inicialmente',()=>{
        useFetchGifs.mockReturnValue({ // decimos que va a devolver , un objeto 
            images:[],
            isLoading: true
        })

        render(<GifGrid category={category}/>) // renderizamos

        expect(screen.getByText('Cargando...')) // esperamos que tenga el texto cargando
        expect(screen.getByText(category)) // y que este el texto categoria 
    })
    test('debe de mostar items cuando se cargan las imagenes useFetchGifs ', () => {
        const gifs = [ // en esta constante generamos un ejemplo del arreglo de objetos que devuelve el useFetchGifs
        {
            id : 'ABC',
            title : 'saitama',
            url: 'http://google.com.ar/saitama.png'
        },
        {
            id : 'DEF',
            title : 'Goku',
            url: 'http://google.com.ar/Goku.png'

        }
        ]

        useFetchGifs.mockReturnValue({ //decimos que la funcion useFetchGifs va a devolver
            images    : gifs, // los gifs generados antes
            isLoading : false // devuelve false
        })

        render(<GifGrid category={category}/>) // renderizamos

        expect(screen.getAllByRole('img').length).toBe(2) // esperamos que haya 2 imagenes 
    });
});