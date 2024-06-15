import React, { useReducer, useState,useCallback } from 'react'
// import NestedComponent from './NestedComponent';
// import NewPractice from './NewPractice';
import ToDo from './ToDo';
import Counter from './Counter';
import {Counterprovider} from './Counterprovider'



// function Practice() {
    // const [count, setCount] = useState(0);

//   const tick = () => {
//     console.log('tick call',count)
//     // setCount(prevCount => prevCount + 1);
//     setCount(count + 1);
//   };


//   useEffect(() => {
//     const interval = setInterval(tick, 1000);
//     return () => { //this will clear the component when we navigate to other place work as componentdidunmount
//         // we we do not so, the count is not reset we will be able to see logs
//       clearInterval(interval);
//     };
//   }, [count]);

//   return <div>{count}</div>;
// }


// function Practice() {
// const [x,setX]=useState(0);
// const [y,setY]=useState(0);
// const logMousePosition =(event) =>{
//     setX(event.clientX);
//     setY(event.clientY);
//     console.log('mouse event')
// }
// useEffect(()=>{
//     window.addEventListener('mousemove',logMousePosition)
//     return ()=>{
//         window.removeEventListener('mousemove',logMousePosition);
//     }
// },[])
// // , the mousemove event handler logMousePosition is still called every time the mouse moves because the event listener is attached to the window object and it reacts to the mouse move events.
// return (
//     <div>
//         mouse - {x} , {y}
//     </div>
// )
// }


  /**
   *   In order to pass the data to child components usecontext is useful
   *  in parent component createcontext with names , multiple context can be created 
   * where we called nested component we have to bind it over context_Name.Provider and value property which pass the data
   * the nested component can be nested inside as well wherever we have to use the data there we will pass  context_name in UseContext hook which returh us data
   *  
   */
//   export const UserContext = React.createContext() ; // creating context and exporting soi that it will be available to other compo
// export  const channelContext =React.createContext();

// function Practice() {
//   const [inputName,setInputName]=useState('')
//   const [channelName,setchannelName]=useState('')

// return (
//     <div>
//         <div>
//         <div className='form-group'>
//         <label> Input name to pass nested component</label>
//         <input 
//         type='text'
//         name='inputName'
//         value={inputName}
//         onChange={(e)=>setInputName(e.target.value)}
//         />
//         </div>
        
//         <div className='form-group'>
//         <label> Input channelName to pass nested component</label>
//         <input 
//         type='text'
//         name='channelName'
//         value={channelName}
//         onChange={(e)=>setchannelName(e.target.value)}
//         />
//         </div>
//         </div>

//         <div>
//             <p> Here we will wrap our nested component to context created provider</p>
//             <UserContext.Provider value={inputName}>
//                 <channelContext.Provider value={channelName}
//                 >
//                     <NestedComponent/>
//                 </channelContext.Provider>
//             </UserContext.Provider>
//         </div>
//     </div>
// )


// ///reducer function accept action,state 
// const initialstate=0
// const reducer =(state,action) =>{
//     switch(action.type){
//         case 'increment':
//             return state+1;
//         case 'decrement':
//             return state-1;
//         case 'reset':
//             return initialstate;
//         default:
//             return state;
//     }
//    }
//    const [count,countDispatch] = useReducer(reducer,initialstate)

// <div>
    // <div>count = {count}</div>
    // <button onClick={()=>countDispatch({type:'increment'}) }>Increment </button>
    // <button onClick={()=>countDispatch({type:'decrement'}) }>Decrement </button>
    // <button onClick={()=>countDispatch({type:'reset'}) }>Reset </button>
  
    // </div>

   


// const initialstateObject={state1:0,state2:0}
// const reducer =(state,action) =>{
//     switch(action.type){
//         case 'increment':
//             return {...state,state1:state.state1+action.value}; /// this will return new state  and action is done based on type and value we sent
//         case 'decrement':
//             return {...state,state1:state.state1-action.value};
//         case 'reset':
//             return initialstateObject;
//             default:
//                 return state;
//     }
//    }

// export const CountCntext=React.createContext()
// function Practice() {
// const [count,countDispatch] = useReducer(reducer,initialstateObject)
 // <div>
    // <div>count = {count.state1}</div>
    // <button onClick={()=>countDispatch({type:'increment',value:1}) }>Increment By 1</button>
    // <button onClick={()=>countDispatch({type:'increment',value:5}) }>Increment By 5</button>
    // <button onClick={()=>countDispatch({type:'decrement',value:1}) }>Decrement By 1</button>
    // <button onClick={()=>countDispatch({type:'reset'}) }>Reset </button>

    // </div>



    
// export const CountCntext=React.createContext()
// function Practice() {
// const [count,countDispatch] = useReducer(reducer,initialstateObject)
    // <div>
    // <CountCntext.Provider
    //  value={{countState:count,countDispatch:countDispatch}}
    // >
    //     <NewPractice />
    // </CountCntext.Provider>
    // </div>
/**
 * reducer in react has same moto as used in javascript 
 * array.reduce(reducer,initialstate) useReducer(reducer,initialstate)
 * reduce method return singl value usereducer return a pair of value [newstate,dispatch]
 */
   //reducer returns new state,action and it take curent state,action
   //count is vcurrentstate dispatch is function use to dispatch action which helps in reduce 
//    React will run your reducer function with the current state and the given action, and then update the state to the new value returned by the reducer.






// The useCallback hook in React is used to memoize a function, preventing it from being re-created on every 
// render unless one of its dependencies changes. This is particularly 
// useful when passing functions as props to child components that might trigger unnecessary re-renders if the function reference changes on every render
//callback will memoise the function increment decrement so that every time it does not get render child compoent

function Practice() {
    
   const [todoList,setTodoList]=useState([]);

   const [BasicCount,setBasicCount] =useState(0);
   const [text,setText]=useState('')

   const addItem=useCallback((todoItem)=>{
       setTodoList((previousTodo)=>[...previousTodo,todoItem]) //Avoid mutating state directly: React relies on immutability to detect stare changes. if i use .push  fn it will mutate original array
       //If you mutate the state directly, React might not detect the change, and your component might not re-render as expected.
   },[todoList])
   
   const deleteItem =useCallback((index)=>{
    //    todoList.slice(index,1)
       setTodoList(previousTodo => previousTodo.filter((item,i)=> i!=index));
   },[todoList])

   increment = () =>{
    setBasicCount((previousStatus=> previousStatus+1))
   },[BasicCount]

   console.log('parent component rendered')
   return (
    <div>
        <div>
            <label>Text is in paret compoent hence if settext call it rerenders the child components It should not rerender child as there is no data changed</label>
            <input type='text' name='setText' value={text} onChange={(e)=>setText(e.target.value)} />
            <button onClick={increment}>{BasicCount}+</button>
        </div>
        <ToDo  todoList ={todoList} HandleAddItem={addItem} HandleDeleteItem={deleteItem}/>
        
    </div>
   )
}


// we wiil wrap our callback fn usecontext and reducer in one example
// coubtprovider.js creasted and we will use its context to load in other comp count.js And in counterprovider we will add reducer and callback
export default Practice;