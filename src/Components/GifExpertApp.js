import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

function GifExpertApp(props) {

    // const categories = ['anime','terror','heroes'];
    const [categories, setCategories] =useState(['naruto']);
    // --MI solucion 
    // const handleAdd = ()=>{
    //     setCategories(categories.concat('comedia'));
    // }
    // Solucion del profe
    // const handleAdd = ()=>{
    //     setCategories(['comedia',...categories]);
    // }
    // const handleAdd = () =>{
    //     setCategories((category)=>{
    //         return ['comedia',...category]
    //     })
    // }
    // const [state, setstate] = useState(initialState)
    return (
        <>
          <h2>GifExpertApp</h2>
          <AddCategory setCategories = {setCategories}/>
          <hr />

          {/* <button onClick={handleAdd}>Add</button>   */}
          <ol>
              {
                  categories.map((category)=>(
                        <GifGrid 
                        key = {category}
                        category = {category}/>
                    )
                  )
              }
          </ol>
        </>
    )
}

// GifExpertApp.propTypes = {

// }

export default GifExpertApp

