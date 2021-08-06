import React, { useState } from 'react'
import PropTypes from 'prop-types'
function AddCategory({setCategories}) {
    // el ultimo valor actualizado del primero 
    // siempre sera el ultimo ingresado
    const [inputText, setInputText] = useState('');

    const handleInputText = (event) =>{
        setInputText(event.target.value);
    }
    const handleForm = (event)=>{
        event.preventDefault();

        if(inputText.trim().length > 2){
            setCategories((category)=>[inputText,...category]);
        }
    }
    return (
        <form onSubmit={handleForm}>
            <p>{inputText}</p>
          <input
                type = 'text'
                value={inputText}
                onChange ={handleInputText}
          />  
        </form>
    )
}

AddCategory.propTypes = {
    setCategories:PropTypes.func.isRequired

}

export default AddCategory

