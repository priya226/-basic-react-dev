import RestaurantCard from "./REstarauntCard";
import {restaurantsList} from "../utils/mocData" //named export import like this
import { useEffect, useState } from "react";
const Body= () =>{
    // https://dev.to/shiv1998/why-not-to-use-index-as-key-in-react-lists-practical-example-3e66
   //Local State Variable - Super poerful variable
    const [restaurantsListData, setListOfRestaraunt] =  useState(restaurantsList) // first arg is variable and second is fn to update the variable
    // we just pass the data as arg into fn and it will internally work as assigning new value to variable
    // we can use this fn whenever we want to update
    //let  restaurantsList = [] NOrmal JS Variable assignment
    // // This is array destrcturing, it return array only
    // const arr =  useState(restaurantsList) 
    // const restaurantsListData = arr[0]
    // const setListOfRestaraunt = arr[1]
    //wehener the state variable updates of rerender the element
   useEffect(()=>{
    console.log('useEffect cslled');
   },[]);

  //  const fetchData = async () =>{
  //   const data = await fetch(
  //       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
  //   );
  //   const json = await data.json();
  //   console.log(json)
  //  };
  //  fetchData();
   console.log('body render')
    return (
    <div className='body'>
        <div className='Search'>Search</div>
        <button className='flt-btn' onClick={
          ()=>{
            console.log('button clicked');
            console.log(restaurantsListData);
           let filteredRestaurantsListData = restaurantsListData.filter((rest)=> rest.data.avgRating > 4);
           console.log(filteredRestaurantsListData);
           setListOfRestaraunt(filteredRestaurantsListData)
          }  
        }>Top Rated Restaraunt </button>
        <div className='restaurant-list'>
            {restaurantsListData.map((restaraunt)=>{
                return (<RestaurantCard {...restaraunt.data} key={restaraunt.data.id} />);}
                          )}
        </div>
            </div>
    )
  }

  export default Body;       