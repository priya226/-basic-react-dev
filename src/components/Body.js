import {restaurantsList} from "../utils/mocData" //named export import like this
import { useEffect, useState } from "react";
import RestaurantCard from "./RestarauntCard" // restaurantCard is defsult export hence it should not be called under {}, it gives error
import Shimmer from  "./Shimmer";
const Body= () =>{
    // https://dev.to/shiv1998/why-not-to-use-index-as-key-in-react-lists-practical-example-3e66
   //Local State Variable - Super poerful variable
    // const [restaurantsListData, setListOfRestaraunt] =  useState(restaurantsList) // first arg is variable and second is fn to update the variable
    // we just pass the data as arg into fn and it will internally work as assigning new value to variable
    // we can use this fn whenever we want to update
    //let  restaurantsList = [] NOrmal JS Variable assignment
    // // This is array destrcturing, it return array only
    // const arr =  useState(restaurantsList) 
    // const restaurantsListData = arr[0]
    // const setListOfRestaraunt = arr[1]


    const [restaurantsListData, setListOfRestaraunt] =  useState([]) // first arg is variable and second is fn to update the variable restarauntListData is original dont need to update
   const [searchText,setSearchText]=useState('')
   const [filteredRestaurantListData,setFilterRestaurant]=useState([]) // filteredRestaurantList is used everywhere

    //wehener the state variable updates of rerender the element
   useEffect(()=>{
    console.log('useEffect called');
   fetchData();
   },[]);

  let getLocationPromise = new Promise((resolve, reject) => {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            resolve({lat: position.coords.latitude, long: position.coords.longitude});
        });

    } else {
        reject("your browser doesn't support geolocation API");
    }
  });

  async function getData(lat, long){

    try{
        const data = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${long}&page_type=DESKTOP_WEB_LISTING`
      );
      const json = await data.json();
      console.log(json)
      for(let i=0;i<json?.data?.cards?.length;i++){
        let checkDataPresent = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants; 
        if(checkDataPresent){
          setListOfRestaraunt(checkDataPresent) // original array need to intact
          setFilterRestaurant(checkDataPresent) //filter array used everywhere
          console.log(checkDataPresent)
          break;
        }
      }
    }
    catch(error){
      console.error('fetched error',error)
    }
  };
  

   function fetchData(){
      // Now I can use the promise followed by .then() 
     // to make use of the values anywhere in the program
     let lat = '17.4358528';
     let long = '78.3679488';

    getLocationPromise.then((location) => {
        console.log(location.latitude);
        lat = location.lat;
        long = location.long
        getData(lat, long);
    }).catch((err) => {
        console.log(err);
        getData(lat, long);
    })
    
  }
   

  //  if(restaurantsListData.length===0){
  //   console.log('shimmer called')
  //   return <Shimmer/>
  //  }

   console.log('body render')
   console.log('conditional rendeing')
    return restaurantsListData.length===0 ? <Shimmer/>: (
    <div className='body'>
      <div className="actions-btn">

      <div className='search-conatiner' >

          <input
          type="text"
          className="search-input"
          placeholder="Search a Restaurant you want .."
          value={searchText}
          onChange={(event)=>setSearchText(event.target.value)}
          >
          </input>

        <button className="searchBtn" onClick={()=>{
        console.log(searchText);
        const filteredRestaurant= restaurantsListData.filter(res=> res.info.name.toLowerCase().includes(searchText));
        console.log(filteredRestaurant)
        setFilterRestaurant(filteredRestaurant)
        }
        }>
        Search
        </button>

        </div>
        <button className='flt-btn' onClick={
        ()=>{
          console.log('button clicked');
          console.log(restaurantsListData);
        let filteredRestaurantsListData = restaurantsListData.filter((rest)=> rest.info.avgRating > 4);
        console.log(filteredRestaurantsListData);
        setFilterRestaurant(filteredRestaurantsListData)
        }  
        }>Top Rated Restaraunt </button>

        <button className="reset-btn" onClick={()=>{
        setFilterRestaurant(restaurantsListData)
        }
        }>
        Reset
        </button>
      </div>
        
        <div className='restaurant-list'>
            {filteredRestaurantListData.map((restaraunt)=>{
                return (<RestaurantCard {...restaraunt.info} key={restaraunt.info.id} />);}
                          )}
        </div>
            </div>
    )
  }

  export default Body;       