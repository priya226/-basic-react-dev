import React from 'react'
forrmObj =[{
    default:'',
    }]
function FormComponent({fields,handleChange,validation}) {
    const [formObject,setformObject]= useState(fields);
    useEffect(() => {
      return () => {
        effect
      };
    }, [input]);
  return (
    <div>
        {
            formObject.type!='dropdown'?
            <input
          type={formObject.type}
          value={formObject.value}
          onChange={(e)=>handleChange(e.target.value).call(formObject)}
          >
           </input>  :
           <div>
             <select
          value={formObject.value}
          onChange={(e)=>handleChange(e.target.value).call(formObject)}
          >
            {formObject.option.map((ob)=>(<option key={ob.value}>{ob.value}</option>))}
          </select>
            </div>

        }
        
        </div>
  )
}

export default FormComponent