import useFetchGifs  from '../../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks'

describe('Pruebas en el hook useFetchGifs', () => {

    test('debe de retornar el estado Inicial', async()=>{
        
        const { result,waitForNextUpdate } = renderHook( () => useFetchGifs( 'Goku' ));
        const {data, loading} = result.current;
    
        await waitForNextUpdate();

        expect( data ).toEqual([]);
        expect( loading ).toBe(true);
    })

    test('should return 10 imgs and loading in false ', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Goku' ));        
        
        await waitForNextUpdate();        
        
        const {data, loading} = result.current;
        
        expect( data.length ).toBe(10);
        expect( loading ).toBe(false);
        
    })
    
        
})
