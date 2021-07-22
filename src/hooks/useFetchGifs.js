import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data:[],
        loading: true
    });


    useEffect( () =>{

        getGifs (category)
        .then( (imgs) => {
            setTimeout(() => {
                setState({
                    data: imgs,
                    loading: false
                })
            }, 1000);
        })
    }, [category])
    
    // useEffect(()=>{  
    //     getGifs(category)
    //     .then((imgs)=>setState({
    //         data: imgs,
    //         loading: false}));
    // },[category])
    // setTimeout(()=>{
    //     setState({
    //         data:[1,2,3,4],
    //         loading: false
    //     })
    // },3000)
    return state;

    
}

export default useFetchGifs
