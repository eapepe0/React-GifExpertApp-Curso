import {render , screen , fireEvent} from '@testing-library/react'
import React from 'react'
import {AddCategory} from '../src/components/AddCategory'
//component to test


describe('Test en AddCategory',()=>{

//init const or props

     test('de cambiar el valor de la caja de texto',()=>{
        render(<AddCategory onNewCategory={ ( ) => { }}/>); // como prop recibe una funcion en este caso usamos una vacia
        const input = screen.getByRole('textbox'); // textbox es el input
        fireEvent.input(input , {target : {value : 'Saitama'}})
        // el input recibe un evento target donde el value es lo que ingresamos en este caso Saitama
        expect(input.value).toBe('Saitama')
        // esperamos que el valor del input sea Saitama
        screen.debug()
    })

    test('debe de llamar onNewCategory si el input tiene valor', () => {
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn(); // funcion mock o sea una simulacion de esa funcion

        render(<AddCategory onNewCategory={ onNewCategory} />); // renderizamos el componente

        const input = screen.getByRole('textbox'); // textbox es el input
        const form = screen.getByRole('form') // form es el form es encontrado por un aria-label = form

        fireEvent.input(input , {target : {value : inputValue}}) // disparamos el evento input
        fireEvent.submit(form) // disparamos el evento submit del form
        screen.debug()
        expect(input.value).toBe('') // despues de hacer submit segun el componente se vacia el input 

        expect( onNewCategory ).toHaveBeenCalled(); // si la funcion es llamada
        expect( onNewCategory ).toHaveBeenCalledTimes(1); // si es llamada una sola vez
        expect( onNewCategory ).toHaveBeenCalledWith(inputValue) // si la funcion es llamada con un valor de input
    });

    test('no debe llamar el onNewCategory si el input esta vacio', () => {
        const inputVacio = '';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory} />); // renderizamos el componente
 
        const form = screen.getByRole('form') // form es el form es encontrado por un aria-label = form
        fireEvent.submit( form ); // mandamos el formulario como no le mandamos datos con el fireEvent.input
        // el input esta vacio
        screen.debug()

        expect( onNewCategory ).toHaveBeenCalledTimes(0) 
        // esperamos que no sea llamado , por que no se puede llamar estando vacio
        // por la linea if(inputValue.trim().lenght <= 1) return;
        
    });
});