import React, { useState } from "react";
import FormStyle from './SignIn.module.css'
import { useNavigate } from 'react-router-dom';


const SignIn = () =>{
    const [credentials,setCredentials] = useState({email:"",password:""});
    const navigate = useNavigate();
    const handleSubmit =  async (e) =>{
        e.preventDefault();
        const url = process.env.REACT_APP_URL;
        const response = await fetch(`${url}/api/auth/login`,{
            method : 'POST',
            headers : {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({email:credentials.email,password:credentials.password})
        });
        const json = await response.json();
        console.log(json);
        if(json.sucess){
            localStorage.setItem('user_name',json.email);
            navigate('/dashboard');
        }else{
            alert("Password mismatched!");
        }
    };
    const onChange = (e)=>{
        setCredentials({...credentials,[e.target.name]: e.target.value});
    }
    return(
       <div className={FormStyle.formInput}>
            <div >
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Email" className={FormStyle.EmailId} name="email"  value={credentials.email} onChange={onChange} id="email" />
                    <input type="password" placeholder="Password" className={FormStyle.Password} name="password"  value={credentials.password} onChange={onChange} id="password"/>
                    <input type="submit" value="Sign In" className={FormStyle.Submit}/>
                </form>
            </div>
            <a href="#" className={FormStyle.PasswordForgotten}>Forgotten password ?</a>
       </div>
    );
}
export  default SignIn;