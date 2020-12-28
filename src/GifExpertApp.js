import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp=()=>{
    //const categorias=['BTS','ONEOKROCK','RANDWIMPS'];
const [categories, setCategories] = useState(['Mario Bros']);
// const handleAdd=()=>{
// //setCategories([...categories,'BT21']);
// setCategories(cats=>[...cats,'BT21']);
// }  

return  (
   <>
   <h2>GifExpertApp</h2>
   <AddCategory setCategories={setCategories}/>
   <hr/>
   {/* <button onClick={handleAdd}>Agregar</button> */}
   <ol>
       {
           categories.map(category=>(
               <GifGrid 
               key={ category }
               category={ category } />
           ))
       }
   </ol>
   
 
   </>
);

}

export default GifExpertApp;