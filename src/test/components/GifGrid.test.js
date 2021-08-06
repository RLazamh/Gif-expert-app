import { shallow } from 'enzyme'
import GifGrid from '../../Components/GifGrid'
import useFetchGifs from '../../hooks/useFetchGifs'
// para ayuda 
import '@testing-library/jest-dom';

jest.mock('../../hooks/useFetchGifs') // fingir useFetch 

describe('Pruebas en el componente <GifGrid />', () => {
    const category = 'Hola' 
     
    test('should match with snapshot ', () => {

       useFetchGifs.mockReturnValue({
            data:[],
            loading: true
        });
        const wrapper = shallow(<GifGrid category={category}/>)
        expect(wrapper).toMatchSnapshot();
    })

    test('should No show the <p /> ', () => {

        const gifs = [{
            id:'ABC',
            url:'https://loca.jpg',
            title: 'Cualquier cosa',

        },{
            id:'123',
            url:'https://loca.jpg',
            title: 'Cualquier cosa',
        }]

        useFetchGifs.mockReturnValue({
             data:gifs,
             loading: false
         });
         const wrapper = shallow(<GifGrid category={category}/>)
         expect(wrapper).toMatchSnapshot();

         expect(wrapper.find('p').exists()).toBe(false)
         expect(wrapper.find('GifGirdItem').length).toBe(gifs.length)
     })


    // test('should show items when carge iamge useFer ', () => {

    // })
    
    
    
})
