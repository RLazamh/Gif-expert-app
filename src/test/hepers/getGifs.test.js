import { getGifs } from "../../helpers/getGifs"

describe('Pruebas en el helper getGifs', () => {
    test('Debe retornar un total de 10 ', async() => {
        const gifs =  await getGifs('Goku');
        expect(gifs.length).toBe(10)
    })
    test('Deberia retornar vacio ', async () => {
        const gifs =  await getGifs([]);
        expect(gifs.length).toBe(0)


    })
    
    
})
