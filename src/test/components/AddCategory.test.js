import '@testing-library/jest-dom'
import { shallow } from "enzyme"
import AddCategory from "../../Components/AddCategory";

describe('test in <AddCategory /> component', () => {

    const setCategories = jest.fn(); // es una funcion cuantas veces es llamada etc 
    let wrapper =  shallow (<AddCategory setCategories={setCategories}/>);
    beforeEach(()=>{
        jest.clearAllMocks
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
    
})
