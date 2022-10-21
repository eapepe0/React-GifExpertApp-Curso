import {render , screen} from '@testing-library/react'
import {GifItem} from '../src/components/GifItem'
import React from 'react'

describe('Pruebas en GridItem',()=>{

    const title = 'Yo soy el titulo';
    const url = 'https://one-punch.com/saitama.jpg';
    const id = 11;

    test('debe hacer match con el snapshot',()=>{

        const { container } = render(<GifItem title = {title} url = {url} id = {id} />);
        expect( container ).toMatchSnapshot();
    }) 
    test('debe mostrar la imagen con el URL y el ALT indicado', () => {
        render(<GifItem title = {title} url = {url} id = {id} />);

        expect(screen.getByRole( 'img' ).src).toBe( url ) // sacamos el src de la imagen y lo comparamos con la url
        expect(screen.getByRole( 'img' ).alt).toBe( title ) // sacamos el alt de la imagen y lo comparamos con el title
        
        const {src , alt} = screen.getByRole('img'); // desestructuramos src y alt de la imagen

        expect(src).toBe(url)
        expect(alt).toBe(title)
    });

    test('debe mostrar el titulo', () => {
        render(<GifItem title = {title} url = {url} id = {id} />); // renderizamos el componente
        expect(screen.getByText(title)).toBeTruthy( ) // esperamos que el titulo buscado sea verdadero
    });
});