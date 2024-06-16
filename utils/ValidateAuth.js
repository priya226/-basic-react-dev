import { Auth } from './Auth';
import {  useLocation } from 'react-router-dom';
/**
 * 
 * This will validate if authorisation req , 
 * it will wrap the component / Link at req place
 * If login requires it will redirect to Login page
 * else return children component 
 */

function ValidateAuth({children}) {
    const authDetails = Auth();
        
    // The location object contains information about the current URL, including the pathname, search parameters, hash, and state
    const location =useLocation();
    // Here important to note once login complete we should navigate 
    // to page where we were going (Profile)
    //For this case handling we have to first set the state using uselocation' during invoking protective routes /profile
    //And in this compopent we will fetch and pass state into navigate /login
    // and in Login component we will fetch location
    //after succefull login we will redirect to state pathname if set else home
    if(!authDetails.activeUserInfo){
    //    return navigate('/login',{state:{path:location.pathname}}) not working
      return <Navigate to='/login' state={{path:location.pathname}} />
    }
    return children
}

export default ValidateAuth;
