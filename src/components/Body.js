import {restaurantsList} from "../utils/mocData" //named export import like this
import { useEffect, useState } from "react";
import RestaurantCard from "./RestarauntCard" // restaurantCard is defsult export hence it should not be called under {}, it gives error
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
    console.log('useEffect called');
   fetchData();
   },[]);

  //  function showPosition(position){
  //   long = position.coords.longitude;
  //   lat = position.coords.latitude;
  //   // getRestData(lat,long)
  // }


   async function fetchData(){
    let long =78.45636000;
    let lat = 17.38405000;
    // if(navigator.geolocation){
    //   navigator.geolocation.getCurrentPosition(showPosition);
    // }

    try{
      const data = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${long}&page_type=DESKTOP_WEB_LISTING`
    );
    const json =await  data.json();
    console.log(json)
    for(let i=0;i<json?.data?.cards?.length;i++){
      let checkDataPresent = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants; 
      if(checkDataPresent){
        setListOfRestaraunt(checkDataPresent)
        console.log(checkDataPresent)
        break;
      }
    }
    }
    catch(error){
      console.error('fetched error',error)
    }
   };

   console.log('body render')
    return (
    <div className='body'>
        <div className='Search'>Search</div>
        <button className='flt-btn' onClick={
          ()=>{
            console.log('button clicked');
            console.log(restaurantsListData);
           let filteredRestaurantsListData = restaurantsListData.filter((rest)=> rest.info.avgRating > 4.5);
           console.log(filteredRestaurantsListData);
           setListOfRestaraunt(filteredRestaurantsListData)
          }  
        }>Top Rated Restaraunt </button>
        {/* <button className="reset-btn" onClick={
        }>
          Reset
        </button> */}
        <div className='restaurant-list'>
            {restaurantsListData.map((restaraunt)=>{
                return (<RestaurantCard {...restaraunt.info} key={restaraunt.info.id} />);}
                          )}
        </div>
            </div>
    )
  }

  export default Body;       