// import React, { useEffect, useState } from 'react'

// import Recipes,{Columns} from '../data/recipes';

// // Table

// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';
// import {InputSwitch} from 'primereact/inputswitch';

// // import PropTypes from 'prop-types'


 
// const TableRecipes = props => {
    
//     const [recipes, setRecipes] = useState(Recipes);
//     const [checked1, setChecked1] = useState(false);

//     useEffect(() => {
//         // productService = new ProductService();
//         // productService.getProductsSmall().then(data => setProducts(data));
//         setRecipes(recipes)
//     }, [])
    
//     const dynamicColumns = Columns.map((col) => {
//         return(
//             <Column 
//             key={col.field} 
//             field={col.field} 
//             header={col.header}>
                
//             </Column>
//         ) 
//     });

//     return (
//         <>
//             <DataTable value={recipes}>
//                 {dynamicColumns}
//             </DataTable> 
//             <h5>Basic</h5>
//             <InputSwitch checked={checked1} onChange={(e) => setChecked1(e.value)} />

         
//         </>
//     )
// }

// // TableRecipes.propTypes = {

// // }

// export default TableRecipes
