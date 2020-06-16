import React from 'react';
import './style.css';

/**
* @author
* @function LoginOn
**/

const LoginOn = (props) => {

  const onLoginPage = (e) =>{
    e.preventDefault();
    props.onLoginPage();
  }


  return(
    <div className="container3">
        <div className="box3">
            <div className="content1">
                <h1>Welcome {props.userName}</h1>
                <p>Click the button below to <span>logout</span></p>
                <div className="taga">
                  <input type="button" value="Logout" onClick={onLoginPage}></input> 
                </div>
            </div>
            <div className="content2">
                <div className="img">
                  <h3>username:{props.userName}</h3>
                  <p>email:{props.eMail}</p>   
                </div>
            </div>
        </div>
    </div>
   )

 }

export default LoginOn