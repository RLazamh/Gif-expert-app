import { shallow } from "enzyme"
import GifExpertApp from "../Components/GifExpertApp"

describe('Test in the component <GifExpertApp />', () => {
    
    const wrapper = shallow(<GifExpertApp />)
    
    test('Should match with snapshot', () => {

        expect( wrapper ).toMatchSnapshot();
        
    })

    test('should show an array of categories', () => {
        const categories = ['One Punch', 'Goku'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />)
        expect( wrapper ).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length)

    })
    

})
