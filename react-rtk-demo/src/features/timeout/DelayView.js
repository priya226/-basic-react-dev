import  { useState } from 'react'
import { simulateDelay } from './delaySlice';
import {useDispatch,useSelector} from '@reduxjs/toolkit'

function DelayView() {
  const [timetaken,setTimeTaken]=useState(0);
  const dispatch = useDispatch();
  //destructuring
  const {message,loading} = useSelector((state)=>{
   return state.delay // we had given name to our slice that we it will give state of this slice only
  })
  const startDelay =(millis)=>{
    dispatch(simulateDelay(millis))
  }
  return (
    <div>
        delayView
        <input type='number' value={timetaken} onChange={e=> setTimeTaken(e.target.value)}/>
        <button onClick={startDelay(timetaken)} disabled={loading}>start delay</button>
        {loading ? 'Waiting...' : message }
        </div>
  )
}

export default DelayView