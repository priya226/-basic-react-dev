import RestaurantCard from "./REstarauntCard";
import {restaurantsList} from "../utils/mocData" //named export import like this
const Body= () =>{
    console.log('Here we structure that inside array of object values present inside data');
    console.log('React component already use desturcutring method hence it will be taking all req keys only as mentioned in props');
    console.log('If we dont give key property we will get warning in console, key is helpful to know which component chnaged');
    console.log('we should avoid using index as keys because it may change for each component if somethimng got inserted/deleted');
    // https://dev.to/shiv1998/why-not-to-use-index-as-key-in-react-lists-practical-example-3e66
    return (
    <div className='body'>
        <div className='Search'>Search</div>
        <div className='restaurant-list'>
            {restaurantsList.map((restaraunt)=>{
                return (<RestaurantCard {...restaraunt.data} key={restaraunt.data.id} />);}
                          )}
        </div>
            </div>
    )
  }

  export default Body;       