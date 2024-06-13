import { useState } from "react";
import { useEffect } from "react";
const RestaurantMenu = ()=>{
    
const [count, setCount] = useState(0);

  const tick = () => {
    console.log('tick call',count)
    // setCount(prevCount => prevCount + 1);
    setCount(count + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return <div>{count}</div>;

}
export default RestaurantMenu;
