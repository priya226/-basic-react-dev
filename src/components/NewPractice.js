
import React, { useContext } from 'react';
import { counterContext } from './Counterprovider';
function NewPractice() {
    const counterData = useContext(counterContext)
    console.log(counterData);
    return (
      <div>
          <div> NewPractice count = {counterData.countState.state1}</div>
          <button onClick={()=>counterData.countDispatch({type:'increment',value:1}) }>Increment </button>
          <button onClick={()=>counterData.countDispatch({type:'decrement',value:1}) }>Decrement </button>
          <button onClick={()=>counterData.countDispatch({type:'reset',}) }>Reset </button>
        
      </div>
    );
}

export default NewPractice

