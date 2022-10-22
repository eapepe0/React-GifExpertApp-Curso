 import {render , screen , fireEvent , renderHook , waitFor} from '@testing-library/react'
 import React from 'react'
 import {useFetchGifs} from '../src/hooks/useFetchGifs'
 //component to test
 
 
 describe('Pruebas en el hook useFetchGifs',()=>{
 
 //init const or props
 
    test('debe de regresar el estado inicial',()=>{
        const { result } = renderHook(() => useFetchGifs ('One Punch'))
        // renderizamos el hook useFetchGifs con la category One Punch
        const { images , isLoading } = result.current
        // del resultado que extrajimos antes extraemos images e isLoading

        expect( images.length ).toBe(0); // esperamos que images este vacio
        expect( isLoading ).toBe(true); // y como valor inicial isLoading en verdadero
        
    })
    test('debe de retornar un arreglo de imagenes e isLoading en false', async() => { // llamamos a la funcion asincrona 

        const { result } = renderHook(() => useFetchGifs ('One Punch'))
        // renderizamos el hook useFetchGifs con la category One Punch

        await waitFor( // esperamos que se ejecute la funcion 
            ()=> expect( result.current.images.length ).toBeGreaterThan(0)
            // esperamos que del resultado el largo del array sea mayor que 0 , o sea que no este vacio
        );

        const { images , isLoading } = result.current // desestructuramos las imagenes y el valor de isLoading
        
        expect( images.length ).toBeGreaterThan(0); // esperamos que el largo del array sea mayor a 0
        expect( isLoading ).toBe(false); // y que isLoading ya haya terminado de cargar (false)
    })
 });