import {render , screen , fireEvent} from '@testing-library/react'
import {getGifs} from '../src/helpers/getGifs'
//component to test


describe('Test a el helper getGifs',()=>{

//init const or props

     test('debe retornar un arreglo de gifs', async ()=>{ // hacemos el async por que usa fetch y await

        const gifs = await getGifs('One Punch');  // llamamos a la funcion
        expect( gifs.length ).toBeGreaterThan( 0 ); // esperamos que el largo del array sea mas grande que 0
        expect( gifs[0] ).toEqual({ // el primer indice del array sea un objeto
            id: expect.any(String), // que el id esperamos que sea cualquier String
            title: expect.any(String), // el title sea cualquier String
            url: expect.any(String), // que la url sea cualquier String
        })
    })
});