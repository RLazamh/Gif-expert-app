import React from 'react'
import {shallow} from 'enzyme'
import GifGirdItem from "../../Components/GifGirdItem"
const title = 'Hola';
const url = 'https://s1.1zoom.me/big3/471/Painting_Art_Back_view_Photographer_575380_3840x2400.jpg'
const wrapper = shallow(<GifGirdItem title = { title } url = { url } />)

describe('Pruebas en <GifGirdItem />', ()=>{
    test('should see correctly the component', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe Tener un parrafo', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title)
    })

    test('should have img al url y alt that the prototypes',()=>{
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url)
        expect(img.prop('alt')).toBe(title)
    })
    test('should have animate__fadeIn ', () => {
        const div = wrapper.find('div')
        expect(div.prop('className')).toMatch('animate__fadeIn')
        // forma del inge 
        const className = div.prop('className');
        // console.log(className)
        expect(`${className}`.includes('animate__fadeIn')).toBe(true)
        
    })
    
    
})