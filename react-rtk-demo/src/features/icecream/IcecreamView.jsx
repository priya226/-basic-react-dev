import { useDispatch, useSelector } from "react-redux"
import { ordered, restocked } from "./icecreamSlice";

function IcecreamView() {
    const numOfIcecream = useSelector((state)=> state.icecream.numOfIcecream);
    const dispatch = useDispatch();
  return (
    <div>
        IcecreamView
        <h2>Number of Icecreams - {numOfIcecream}</h2>
        <button onClick={()=>{dispatch(ordered())}}>Order Icecreams</button>
        <button onClick={()=>{dispatch(restocked(5))}}>Restock Icecreams</button>
    </div>
  )
}

export default IcecreamView