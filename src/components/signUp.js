import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//This is nested form creation using javascript objev=ct and form
const SignUpForm = ()=>{
    const navigate = useNavigate();
     
    const [formSignUpData,setformSignUp] =useState({
        firstName:'',
        email:'',
        password:'',
        address:{
            street:'',
            city:'',
            state:'',
            zipcode:'',
            addressType:''
        }
    });
    
    const [SignUpError,setErrors]=useState({
        firstName:'',
        email:'',
        password:'',
        address:{
            street:'',
            city:'',
            state:'',
            zipcode:'',
            addressType:''
        }
    })
    const [isFormValid, setIsFormValid] = useState(false);

    const formField ={
        firstName:{
            type:'text',
            label:'firstName',
            validation:(value)=>{
                return value.trim()===''?'Name should not be empty':'';
            }
        },
        email:{
            label:'email',
            type:'email',
            validation:(value)=>{
                const reg=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._]+|.[a-zA-Z]{2,6}$/
                return reg.test(value) ? '' :'Invalid Email Addrres'
            }
        },
        password:{
            label:'Password',
            type:'password',
            validation :(value)=>{
                // let capletter = /^[A-Z]+$/
                // let smallletter =/^[a-z]$/
                // let specialchar =/^[\W_]+$/
                let errormessage ='';
                //  capletter.test(value)===false ? errormessage=errormessage+'Atleast one capital letter required ':errormessage='';
                //  smallletter.test(value)===false ? errormessage=errormessage+'Atleast one small letter required ':errormessage='';
                //  specialchar.test(value)===false ? errormessage=errormessage+'Atleast one special character required ':errormessage='';
                value.length<6 ?  errormessage ='Passwordd should be minimum 6 in length':errormessage='';

                return errormessage;
                
            }
        },
        address:{
            street:{
                type:'text',
                label:'street',
                validation:(value)=>{
                   return value.trim()==''?'Please Fill Street':''
                },
            },
            city:{
                type:'text',
                label:'city',
                validation:(value)=>{
                    return value.trim()==''?'Please Fill City':'';
                },
            },
            state:{
                type:'text',
                label:'state',
                validation:(value)=>{
                    return value.trim()==''?'Please Fill State':'';
                },
            },
            zipcode:{
                type:'zipcode',
                label:'zip',
                validation:(value)=>{
                    return /^\d{5}$/.test(value) ? '':'zipcode must be 5 digit'
                },
                keypressEventHandle:(event)=>{
                    if(!(/[0-9]/.test(event.key))&&event.key!=='Backspace'){
                        //the key is not digit neither backspace
                        event.preventDefault();
                    }
                }
            },
            // addressType:{
            //     type:'select',
            //     label:'Adrress Type',
            //     dropdownList:[
            //         'Home','Office','Others'
            //     ]
            // }
            }
        }

    useEffect(()=>{
        setIsFormValid(checkValidation());
    },[formSignUpData,formSignUpData.address,SignUpError]); // The dependency array does not detect nestee object change
    //hence to detect change and call useeffect we have to give nested object reference into dependency array

    handleChange=(field,value)=>{ // this handle layer one of form
        setformSignUp({...formSignUpData,[field]:value})
       const {validation} = formField[field];
       setErrors({...SignUpError,[field]:validation(value)})
    };
    handleAddressChange=(subfield,value)=>{ //  this handle nested object
        setformSignUp(
            {...formSignUpData,
            address:{
                ...formSignUpData.address,
                [subfield]:value
            }}
        )
        const {validation} = formField.address[subfield];
        setErrors(
            {...SignUpError,
            address:{
            ...SignUpError.address,[subfield]:validation(value)}
        })
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log(formSignUpData);
    //    let data=  prompt('signup form created go explore Home page')
    //    if(data){
        navigate('/')
    //    }

    }
    function checkValidation(){
        let isFormValid=true;
        Object.keys(SignUpError).forEach(field =>{
            if(typeof SignUpError[field] === 'object'){
                Object.keys(SignUpError[field]).forEach(subfield=>{
                    if(SignUpError[field][subfield]!==""){
                       isFormValid = false;
                       return isFormValid;
                    }
                })
            }else{
                if(SignUpError[field]!==""){
                    isFormValid = false;
                    return isFormValid;
                 }
            }
        })
        return isFormValid;
    }
    return (
        <div key='signupform'>
            <form onSubmit={handleSubmit}>
            {
                Object.keys(formField).map((field)=>{
                   return  ( ///The JSX was not getting render when it was not returned, map concept we have used { }
                   <div key={field}>
                        {
                             typeof formField[field]?.validation !== 'function' ?
                            (
                                Object.keys(formField[field]).map((subfield)=>( /// () braces does not req return
                                    <div key={`${formField}.${subfield}`}>
                                        <label>
                                            {formField[field][subfield]?.label}
                                        </label>
                                        <input
                                        type={formField[field][subfield].type}
                                        value={formSignUpData[field][subfield]}
                                        onChange={(e)=> handleAddressChange(subfield,e.target.value)}
                                        onBlur={(e)=> handleAddressChange(subfield,e.target.value)}
                                        onKeyPress
                                        ={subfield==='zipcode'? formField[field][subfield].keypressEventHandle:null}
                                        />
                                        {/* {SignUpError[field][subfield] &&
                                        <span style={{color:'red'}}>
                                            {SignUpError[field][subfield]}
                                            </span>} */}
                                    </div>
                                ))

                            ) :
                            (
                                <>
                                <label> {formField[field].label} </label>
                                <input
                                type={formField[field].type}
                                value={formSignUpData[field]}
                                onChange={(e)=> handleChange(field,e.target.value)}
                                onBlur={(e)=> handleChange(field,e.target.value)}
                                onKeyPress
                                        ={field==='zipcode'? formField[field].keypressEventHandle:null}
                                        
                                 />
                                 {SignUpError[field] &&
                                 <span style={{color:'red'}}>
                                    {SignUpError[field]}
                                 </span>
                                 }
                                </>

                            )
                        }
                    </div>)
                })
            }
            <button type="submit" disabled={!isFormValid}>SignUp</button>
            </form>
            
        </div>
    )
}
export default SignUpForm;