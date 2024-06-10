import { useEffect, useState } from "react"

const Contact = () =>{
    const handleSubmit =(event)=>{
        event.preventDefault();
        //we can call post api here
    }
    const handleInputChange =(event)=>{
       const {name,value}=event.target;
        setFormData({...formdata,
                  [name]:value}) // firstly set formdata
        setFormErrors({
            ...formError,
            [name]:validate(name,value) // then validate the field which has been changed and set error in errorrform
        })

    }
    const validate =(name,value)=>{
        let error ='';
        switch(name){
         case 'name': error = value.length ==0 ? 'Name should not be empty' : ''; break;
         case 'email' : error= /\S+@\S+\.\S+/.test(value) ? '': 'email is invalid'; break;
         case 'message' : error = value.length==0? 'please write some message' : ''; break;
        }
        return error;
    }
    const [formdata,setFormData]=useState({
        name:'',
        email:'',
        message:''
    })
    const [formError,setFormErrors]=useState(
        {name:'',
        email:'',
        message:''}
    )
    const [invalidForm, setInvalidForm]=useState(false);
    useEffect(()=>{
         const error = Object.keys(formError).every((key)=>formError[key]==='') // return true if every key in formerror is empty 
         setInvalidForm(error)
    },[formdata,formError])
    return(
        
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                <input 
                type="text"
                placeholder="Your Name"
                id="nameBox"
                required
                name="name"
                value={formdata.name}
                onChange={handleInputChange}
                />
                {formError.name && <span className="errorMessage"> {formError.name}</span>}
                
                </div>

                <div className="form-group">
                <input 
                type="email"
                placeholder="Your email address"
                id="emailBox"
                required
                name="email"
                value={formdata.email}
                onChange={handleInputChange}
                />
                {formError.email && <span className="errorMessage"> {formError.email} </span>}
                </div>

                <div className="form-group">
                <textarea 
                placeholder="write your message here .."
                required
                name="message"
                value={formdata.message}
                onChange={handleInputChange}
                />
                {formError.message && <span className="errorMessage"> {formError.message}</span>}
                </div>
                
                <button
                type="submit"
                id="submitcontactus"
                className={invalidForm ?'about-profile-button' :'inactive'}
                disabled={!invalidForm}
                >
                    Submit
                </button>
            </form>
            
        </div>
    )
}
export default Contact;