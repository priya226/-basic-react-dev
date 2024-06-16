import profileImg from "../../Assest/profile.jpeg"
import { Auth } from "../../utils/Auth";

const Profile =()=>{
    const auth = Auth(); // fetch data of user set in auth
    return (
        <div>
                  <img src={profileImg} />
                    <p>
                        Hi this is Penguine.He he he.
                    </p> 
                    <p>
                        Welcom {auth.activeUserInfo.email}
                        </p>             
        </div>
    )
}
export default Profile;