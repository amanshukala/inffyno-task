import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css"
import FormInput from "./FormInput"

const Login = (props) => {
  const [values, setValues] = useState({
 
    email: "",
    password: "",
  

  });

  const [form_invalid ,setForm_invalid] =useState(false)

  const inputs = [

    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      
    },
   
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    
    },
   
  ];

 
 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values)

    if(values.email.trim()=== "" || values.password ===""){
      setForm_invalid(true)
    }else {
      setForm_invalid(false)
    }
    console.log(form_invalid);
  
    setValues({
    
      email: "",
    
      password: "",
    
  
    })
  }  

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app ">
     <form onSubmit={handleSubmit }>
        <h1>Login</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        {form_invalid ? <p>Please enter valid email and password</p>: ""}
        <button  >Submit</button>

        
          <Link to="/sing_up">
          <p className="text-[22px] mb-[22px] text-center hover:border-b-2 border-red-800 ">I'm not user</p>
          </Link>
        
      </form>
    </div>
  );
};

export default Login;


