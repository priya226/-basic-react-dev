import React from 'react';
import ReactDOM  from 'react-dom/client';

/**
 * Header
 *    Logo
 *    Nav Items
 * Body
 *   Search
 *   RestaurantSearchContainer
 *   RestaurantCard
 *    -Img
 *    -Name of Res, star Rating,cuisine,delivery time
 *Footer
    Copyrright
    Links
    Addreess
    Contact
 */
    
  const Header =()=>{
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src="https://wallpapercave.com/wp/wp3495556.jpg" alt='food-image'/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
  }
  styleCard = {
    backgroundColor : "#f0f0f0"
  }
  const RestaurantCard =() =>{
    return (
        <div className='res-card' >
            <img 
            className='res-logo'
            alt='taza-kitchen-food'
            src='https://b.zmtcdn.com/data/reviews_photos/98a/ad03feac25bb8966d35ad10b2c51098a_1570340390.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*'/>
            <h3> Taza Kitchen</h3>
            <h4> Biryani,South indian,north indian</h4>
            <h4>4.4 star</h4>
            <h4>30 minuites</h4>
        </div>
    )
  }
  const Body= () =>{
    return (
    <div className='body'>
        <div className='Search'>Search</div>
        <div className='res-container'>
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
        </div>
    </div>
    )
  }

   const AppLayoutComponent = ()=>{
    return (
        <div className='app'>
            {/* //Header
            //Body
            //Footer */}
        <Header />
        <Body />
        </div>
    )
   }
  const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(<AppLayoutComponent />)