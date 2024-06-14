import React, { useState } from 'react'
import NestedComponent from './NestedComponent';

export const UserContext = React.createContext() ; // creating context and exporting soi that it will be available to other compo
export  const channelContext =React.createContext();
function Practice() {
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


  /**
   *   In order to pass the data to child components usecontext is useful
   *  in parent component createcontext with names , multiple context can be created 
   * where we called nested component we have to bind it over context_Name.Provider and value property which pass the data
   * the nested component can be nested inside as well wherever we have to use the data there we will pass  context_name in UseContext hook which returh us data
   *  
   */
  const [inputName,setInputName]=useState('')
  const [channelName,setchannelName]=useState('')

return (
    <div>
        <div>
        <div className='form-group'>
        <label> Input name to pass nested component</label>
        <input 
        type='text'
        name='inputName'
        value={inputName}
        onChange={(e)=>setInputName(e.target.value)}
        />
        </div>
        
        <div className='form-group'>
        <label> Input channelName to pass nested component</label>
        <input 
        type='text'
        name='channelName'
        value={channelName}
        onChange={(e)=>setchannelName(e.target.value)}
        />
        </div>
        </div>

        <div>
            <p> Here we will wrap our nested component to context created provider</p>
            <UserContext.Provider value={inputName}>
                <channelContext.Provider value={channelName}
                >
                    <NestedComponent/>
                </channelContext.Provider>
            </UserContext.Provider>
        </div>
    </div>
)
}

export default Practice