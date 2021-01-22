import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Logincarousel from './Logincarousel';

const Login = () => {
    const [inputdata , setinputdata] = useState({});
    const [error , seterror] = useState({});
    const history = useHistory();

    const handelchange = (e) =>{
        const value = e.target.value;
        const name = e.target.name;
       setinputdata((pre)=>{
            return{
                ...pre,
                [name]:value
                
            }
       })
    }
    const onsubmithandel = (e) =>{
        e.preventDefault();
        if(validate()){
            console.log(inputdata);
            history.push('/')
            let input = {};
            input["password"] = "";
            input["email"] = "";
            setinputdata(input);

        }
    }
    const validate = () =>{
        let input = inputdata ; 
        let errors = {} ;
        let isvalid = true ;

        console.log(input);
        console.log(errors);
        console.log(typeof(input.email))
        if(!input["password"]){
            isvalid = false ;
            errors['password'] = 'invalid password';
        }
        if (!input["email"]) {
            isvalid = false;
            errors["email"] = "Emailaddress dosn't exist";
        }
    
        if (typeof input["email"] !== "undefined") {
            
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(input["email"])) {
                isvalid = false;
                errors["email"] = "invalid email address";
            }
        }
        seterror(errors)
        return isvalid;
    }
    const {email , password} = inputdata;
    return (
        <>
            <div className="container-fluid">
                <div className="row login_div">
                    <div className="col-md-7 col-lg-8 img_div">
                    <Logincarousel />
                       
                    </div>
                    <div className="col-md-5 col-lg-4 form_div ">
                        <h1>CABAU</h1>
                        <form onSubmit={(e)=>onsubmithandel(e)}>
                            <div className={!error["email"] ? "input_div" : "input_div echeck"} >
                                <i className="fa fa-envelope echeck" aria-hidden="true"></i>
                                <input onChange={(e)=>handelchange(e)} name="email" value={email} type="email" placeholder={!error["email"] ? "Email address" : error["email"]} />
                            </div>
                            <div className={!error["password"] ? "input_div" : "input_div passcheck"} >
                                <i className="fa fa-lock" aria-hidden="true"></i>
                                <input onChange={(e)=>handelchange(e)} name="password" value={password} type="password" placeholder={!error["password"] ? "password" : error["password"]} />
                            </div>
                            <div className="button_div">
                                <strong><a> Forget Your password ?</a></strong>
                                <button>LOG IN</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div>
                
                </div>
            </div>
        </>
    )
}
export default Login ;
