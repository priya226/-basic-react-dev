import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
const About = ()=>{
    const [showProfile,setshowProfile]=useState(false)
    return (
        <div>
            <h1>About Us Page</h1>
            <p>
            {
                showProfile 
                  ? (
                    <>
                    {/* navigate back to only /about routing  */}
                    <Link to={'/about'}>
                        <button
                        className="about-profile-button"
                        onClick={() => setshowProfile(false)}
                        >
                            Hide My Profile
                        </button>
                        </Link>
                        <Outlet /> {/*  because here the Profile component gets added which is child route for about section */}

                    </>
                ):
                (
                    <>
                    {/* append profile in routing */}
                    <Link to={'profile'}>
                        <button
                        className="about-profile-button"
                        onClick={() => setshowProfile(true)}
                        >
                            Show My Profile
                        </button>
                    </Link>
                    </>
                )
            }
            </p>
            
        </div>
    )
}
export default About;