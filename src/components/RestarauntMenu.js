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
    return () => { //this will clear the component when we navigate to other place work as componentdidunmount
        // we we do not so, the count is not reset we will be able to see logs
      clearInterval(interval);
    };
  }, [count]);

  return <div>{count}</div>;

}
export default RestaurantMenu;
