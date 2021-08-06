// import React, { useEffect, useState } from 'react'
import React from 'react'
import useFetchGifs from '../hooks/useFetchGifs'
import PropTypes from 'prop-types'
import GifGirdItem from './GifGirdItem';
// import { getGifs } from '../helpers/getGifs';

function GifGrid({category}) {
    const {loading, data: images } = useFetchGifs(category);
    // console.log(loading);
    // console.log(images);
    // el codigo que se ejecutara una sola vez se manda las dependencias y la funcion 
    // la funcion que tiene adentro se disparar una sola vez :)
    // const [image, setImage] = useState([]);
    return (
        <>
            <h2 className="animate__animated animate__fadeIn">{category}</h2>
            {loading && <p className="animate__animated animate__flash">Cargando.......</p>}
            <div className="card-grid ">
            
                {
                    images.map((img)=>(
                        <GifGirdItem 
                        key ={img.id} 
                        {...img}/>
                    ))
                }
              
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,

}

export default GifGrid;

