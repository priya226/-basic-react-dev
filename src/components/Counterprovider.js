import React, { useReducer, useState } from 'react';
countReducer =(state,action)=>{
    switch (action.type){
        case 'increment':
            return {count:state.count+action.value};
        case 'decrement':
            return {count:state.count-action.value};
        case 'reset':
             return initialstate;
        default :
             return state;

    }
}
let initialstate ={count:0};

const counterContext= React.createContext();
function Counterprovider({children}) { //  children} is used as a prop, which will include any nested components nested inside the CountProvider when it is used. 
    //suppose we want this providerr into somecounter1 and counter2 component we can directly use its context there and inside countprovider dynamically define nested component as {children}
    //***** count1 and counter   just be wrapped by counterprovider and usecontext is used for getting context 
   const [state,dispatch] = useReducer(countReducer,initialstate);


   //// reate increment decrement function callback which will be passed to child compoent wrapped into context.provide

   const increment =((value)=>{
    dispatch({type:'increment',value:value})
   })

   const decrement =(value)=>{
    dispatch({type:'decrement',value:value})
   }

   const reset =()=>{
    dispatch({type:'reset'})
   }
  return (
    <div>
        
      <counterContext.Provider value={{state,increment,decrement,reset}}>
     {children}
      </counterContext.Provider>
    </div>
  );
}

export  {Counterprovider,counterContext};

