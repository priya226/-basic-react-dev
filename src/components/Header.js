import { useState } from "react";
import { IMG_CDN_URL } from "../utils/constant";
import { Link, useNavigate } from "react-router-dom";

export const Header =()=>{
   const [loginStatus,setUserLogin]=useState('login')
   const navigate = useNavigate(); // functionaly changing router define inside only other wise creates error
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src="https://wallpapercave.com/wp/wp3495556.jpg" alt='food-image'/>
            </div>
            <div className='nav-items'>
                <ul>
                    {/* <li>Home</li> */}
                    <li>
                         <Link to='/'>Home</Link> {/* Navigate to home page*/}</li>                  
                    <li>
                         <Link to='/about'>About Us</Link> {/* Navigate to about page*/} </li>
                    <li>
                         <Link to='/contact'>Contact Us</Link> {/* Navigate to home page*/} </li>
                    <li>
                         <Link to='/cart'>Cart</Link> </li>
                    {/* conditional rendering of element */}
                    <li>
                        <Link to='/signUp'>
                        Signup
                        </Link>
                    </li>
                    <li>
                        {
                           loginStatus==='login' ?(
                            <button
                                className="logout-btn"
                                onClick={() => setUserLogin('logout')}
                            >
                                Logout
                            </button>
                           ) :(
                            <button className="login-btn" onClick={() => {setUserLogin('login')
                                                                          navigate("/login")}}>
                                Login
                            </button>
                            )
                        }
                    </li>
                </ul>
            </div>
        </div>
    )
  }

  export default Header;