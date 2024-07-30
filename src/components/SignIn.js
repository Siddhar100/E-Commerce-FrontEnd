import React from "react";
import FormStyle from './SignIn.module.css'

const signIn = () =>{
    return(
       <div className={FormStyle.formInput}>
            <div >
                <form action="/dashboard">
                    <input type="email" placeholder="Email" className={FormStyle.EmailId}/>
                    <input type="password" placeholder="Password" className={FormStyle.Password}/>
                    <input type="submit" value="Sign In" className={FormStyle.Submit}/>
                </form>
            </div>
            <a href="#" className={FormStyle.PasswordForgotten}>Forgotten password ?</a>
       </div>
    );
}
export  default signIn;