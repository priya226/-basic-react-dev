import { useState } from "react";
import profileImg from "../../Assest/profile.jpeg"
import { Link } from "react-router-dom";
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
                    <img src={profileImg} />
                    <p>
                        Hi this is Penguine.He he he.
                    </p>
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