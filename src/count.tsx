import React, { useState } from 'react';
import './index.css';

function Count(){
    let [count,setCount]= useState(0)

    let incCount=()=>{
       setCount(count+1);
        
    }
    
  let decCount=()=>{
          setCount(count-1);
          
    }
  
    
   return(
        <div className="Index">
        <h1 className="Counter">{count} </h1>
        <button className="Inc-button" onClick={incCount}>+</button>
        <button className="Dec-button" onClick={decCount}>-</button>

        </div>
        )
     
}

export {Count} 


    