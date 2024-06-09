import { useEffect, useState } from "react"
import RestaurantCard from "./RestarauntCard";
import Shimmer from  "./Shimmer";

    

let getLocationPromise = new Promise((resolve, reject) => {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                resolve({lat: position.coords.latitude, long: position.coords.longitude});
            });
    
        } else {
            reject("your browser doesn't support geolocation API");
        }
      });

async function fetchCoordinates(){
        // Now I can use the promise followed by .then() 
       // to make use of the values anywhere in the program
       let lat = '17.4358528';
       let long = '78.3679488';
       console.log('fetchdata called');
  
      return new Promise((res) =>{
        getLocationPromise.then((location) => {
        //   console.log(location.latitude);
          res( {
            lat:location.lat,
            long:location.long
          })
      }).catch((err) => {
          console.log(err);
          res( {
            lat:lat,
            long:long
          } );     
        });
      
    })
}



async function getData(coords){

        try{
            const data = await fetch(
            `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${coords.lat}&lng=${coords.long}&page_type=DESKTOP_WEB_LISTING`
          );
          const json = await data.json();
          console.log(json)
          let checkDataPresent =[]
          for(let i=0;i<json?.data?.cards?.length;i++){
          checkDataPresent = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants; 
            if(checkDataPresent){
              break;
            }
          }
          return checkDataPresent
        }
        catch(error){
          console.error('fetched error',error)
          throw (error)
        }
      };


      //this function returns the filtered data based on search
function filterDataonSearch(searchText,restarauntList){
    const filterdata=restarauntList?.filter(res=> res.info.name.toLowerCase().includes(searchText));
    
    return filterdata;
}

function topRatedRestaraunt(rating,restarauntList){
  let filterdata = restarauntList.filter((rest)=> rest.info.avgRating > rating);
    return filterdata;
}

    /**
     * what happens if we define variable or use usestate outside component variable
     * 
     * Declaring useState (or any other hook) outside the component body isn't allowed according to the React rules. Doing so would violate the rules of hooks, which dictate that hooks should only be called at the top level of the component body or within other custom hooks. Attempting to call hooks conditionally or within nested functions can lead to bugs or unexpected behavior in your components.
     * 
     *  */ 

    
    const Body=()=>{
    const [allrestarauntListData,setListOfAllRestaraunt]=useState([]); // Setting previous state and store data fetched from API
    const [searchText,setSearchText]=useState(''); // search Text initial
    const [filteredRestaurantListData,setFilterRestaurant]=useState([]) // This  we use for rendening data and filtering operation
    const [loading,setLoading]=useState(false); // in order to show shimmer ui
    useEffect(()=>{
       let fetchingDetails = async ()=>{
        try{
            setLoading(true);// api call process started

            const coordinatesAPI = await fetchCoordinates() ; // first this gets called and return coordinates
            const swiggyAPI = await getData(coordinatesAPI) ; // then this get called with param from 1st promise
            const checkDataPresent = {coordinatesAPI,swiggyAPI}

            setListOfAllRestaraunt(checkDataPresent.swiggyAPI) // original array need to intact
            setFilterRestaurant(checkDataPresent.swiggyAPI) //filter array used everywhere
            console.log(restarauntListData,'restarauntListData')
        
        }catch(error){
            console.log('error')
        }finally{
            setLoading(false);
        }
       }
       fetchingDetails();
       
    },[])

    return loading==true ? <Shimmer/>:(
        
        <div className="search-Container">
            <div>
            <input
            type="text"
            className="search-input"
            placeholder="Search a Restaurant you want .."
            value={searchText}
            onChange={(event)=>setSearchText(event.target.value)} //If direct call then alot of renredndeing unneccesaay and will cause error
                        >
            </input>
            <button
            className="action-btn"
            onClick={()=> ////In React, when you're attaching event handlers like onClick to elements, you often use arrow functions to maintain the context of this within the component. This ensures that the this keyword refers to the component instance itself rather than the DOM element where the event was triggered.
                {  const data=filterDataonSearch(searchText,allrestarauntListData)
                  setFilterRestaurant(data)
                }
            }
            >
              Search
            </button>

            <button className='flt-btn' onClick={
                ()=>{
                  data = topRatedRestaraunt(4,allrestarauntListData)
                  setFilterRestaurant(data)
                }  
                }>Top Rated Restaraunt </button>

                <button className="reset-btn" onClick={()=>{
                setFilterRestaurant(allrestarauntListData)
                }
                }>
                Reset
                </button>
            </div>

            <div className='restaurant-list'>
            {filteredRestaurantListData?.map(restaraunt=>{
                return <RestaurantCard key={restaraunt.info.id} {...restaraunt.info}/>
            })
            }
            </div>
        </div>
        

    )
}
export default Body;