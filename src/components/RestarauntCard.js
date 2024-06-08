const RestaurantCard =(({name,cuisines,cloudinaryImageId,sla,avgRating})=>
    {
        return (
            <div className='res-card'>
                <img
                 className='res-logo'
                //  src={
                //     "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                //     cloudinaryImageId
          
                //  }
                 src="https://tse4.mm.bing.net/th?id=OIP.XW1q_USPKBe9U9J7GHSJwwHaE7&pid=Api&P=0&h=180"
                 alt="food_image"
                />
                 <h3> {name}</h3>
                <h4> {cuisines.join(", ")}</h4>
                <h4>{sla?.slaString}</h4>
                <h4>{avgRating}</h4>
           
            </div>
        )
    })

export default RestaurantCard;