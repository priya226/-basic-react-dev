import React, { useContext } from 'react'
import { counterContext } from './Counterprovider'

function Counter() {
    console.log('count child rendered')
    const { state,increment,decrement,reset}=useContext(counterContext) // we using contercontext usecontext will return all things which provided in value during wrapping nested component
  return (
      <div>
            <p>count ={state.count}</p>
            <button onClick={()=> increment(1)}> increment</button>
            <button onClick={()=> decrement(1)} >decrement</button>
            <button onClick={reset} >Reset                                                                                                                                              </button>
      </div>)
}

export default Counter;