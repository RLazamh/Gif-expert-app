import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import AddCategory from '../../Components/AddCategory';

describe('test in <AddCategory /> component', () => {

    const setCategories = jest.fn(); // es una funcion cuantas veces es llamada etc 
    let wrapper =  shallow (<AddCategory setCategories={setCategories}/>);
    
    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper =  shallow (<AddCategory setCategories={setCategories}/>);

    })
    
    test('should to match with snapshot', () => {
        expect( wrapper ).toMatchSnapshot();
    })
    
    test('should return value on Change',()=>{
        const input =  wrapper.find('input');
        const value = 'hola mundo';
        input.simulate('change',{ target: { value } });
        expect(wrapper.find('p').text().trim()).toBe(value)
    })
    
    test('No debe llamarse las funcion ', () => {
        wrapper.find('form').simulate('submit',{ preventDefault(){} })
        expect(setCategories).not.toHaveBeenCalled()
    })

    test('should call the setCategories 1 and function', () => {
        const value ='hola Mundo'
        // simular el input change
        wrapper.find('input').simulate('change',{ target:{value}});
        // simular el submit
        wrapper.find('form').simulate('submit',{ preventDefault(){} });
        // simular si se llamo una vez 
        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toBeCalledTimes(1);
        expect( setCategories ).toBeCalledWith( expect.any(Function))
    })
    test('Clean the box text', () => {
        // problemas de version para el test solo funciona si se le llama fuera de un text 
        // verificar si el input se vacio 
        expect( wrapper.find('input').prop('value') ).toBe('')

    })
    
    
    
})
