import { useState } from "react";
import { IMG_CDN_URL } from "../utils/constant";
export const Header =()=>{
   const [loginStatus,setUserLogin]=useState('login')
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
                    {/* conditional rendering of element */}
                    <button onClick={()=>{
                        loginStatus==='login'?setUserLogin('logout'):setUserLogin('login')
                    }
                    }>
                        {loginStatus}
                    </button>
                </ul>
            </div>
        </div>
    )
  }

  export default Header;