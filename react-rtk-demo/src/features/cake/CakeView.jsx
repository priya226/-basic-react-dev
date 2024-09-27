import { useDispatch, useSelector } from "react-redux"
import { ordered, restocked } from "./cakeSlice";
import { useState } from "react";

function CakeView() {
    const numOfCakes = useSelector(state=> state.cake.numOfCake); // to fetch store ka state
    const dispatch = useDispatch(); // dispatch action to reducer
    const [value,setValue]=useState(1);
  return (
    <div>
        CakeView
        <h2>Number of Cakes - {numOfCakes}</h2>
        <button onClick={()=> dispatch(ordered())}>Order Cake</button>
        <input type="number" value={value} onChange={e=>setValue(parseInt(e.target.value))} />
        <button onClick={()=> dispatch(restocked(value))}>Restock Cake</button>
    </div>
  )
}

export default CakeView