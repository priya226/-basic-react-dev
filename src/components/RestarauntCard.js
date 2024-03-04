const RestaurantCard =(({name,cuisines,cloudinaryImageId,lastMileTravelString,avgRating})=>
    {
        return (
            <div className='res-card'>
                <img
                 className='res-logo'
                 src={
                    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                    cloudinaryImageId
          
                 }
                />
                 <h3> {name}</h3>
                <h4> {cuisines.join(", ")}</h4>
                <h4>{lastMileTravelString}</h4>
                <h4>{avgRating}</h4>
           
            </div>
        )
    })

    export default RestaurantCard;