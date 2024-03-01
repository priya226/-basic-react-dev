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
  const RestaurantCard =(props) =>{
    console.log(props);
    console.log('Props are arguments passed into React components')
    console.log('React Props are like function arguments in JavaScript and attributes in HTML')
    console.log('To send props into a component, use the same syntax as HTML attributes')
    return (
        <div className='res-card' >
            <img 
            className='res-logo'
            alt='taza-kitchen-food'
            src='https://b.zmtcdn.com/data/reviews_photos/98a/ad03feac25bb8966d35ad10b2c51098a_1570340390.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*'/>
            <h3> {props.resName}</h3>
            <h4> {props.cuisine}</h4>
            <h4>{props.rating}</h4>
            <h4>{props.deliveryTime}</h4>
        </div>
    )
  }
  const RestaurantCardDEstructPropOnFly =({resName,cuisine,rating,deliveryTime}) =>{
    return (
        <div className='res-card' >
            <img 
            className='res-logo'
            alt='taza-kitchen-food'
            src='https://b.zmtcdn.com/data/reviews_photos/98a/ad03feac25bb8966d35ad10b2c51098a_1570340390.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*'/>
            <h3> {resName}</h3>
            <h4> {cuisine}</h4>
            <h4>{rating}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    )
  }
  const Body= () =>{
    return (
    <div className='body'>
        <div className='Search'>Search</div>
        <div className='res-container'>
            <RestaurantCardDEstructPropOnFly 
            resName="Taza Kitchen"
            cuisine ="Biryani, North Indian, Asian"
            rating="4.4 star"
            deliveryTime="30 minutes"
            />
            <RestaurantCard 
            resName ="Mehfil"
            cuisine="Biryani, North Indian, Non-Veg, Veg"
            rating="4.4 star"
            deliveryTime="30 minutes"
            />
            <RestaurantCard 
            resName ="Santosh Family Dhaba"
            cuisine ="Veg, South Indian, North Indian"
            rating="4.4 star"
            deliveryTime="30 minutes"
            />
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