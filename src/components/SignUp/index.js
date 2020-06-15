import React,{ useState } from 'react';
import './style.css';

/**
* @author
* @function SingUp
**/

const SingUp = (props) => {
  
    console.log('signUp render');

    // dataPush->
    
    const onSignUpData = (e) =>{
        e.preventDefault();
        let username = e.target.username.value;
        let password = e.target.password.value;

        if(!username || !password){
            alert('please enter username and password');
        }else{
            props.SignOn(
                e.target.username.value,
                e.target.password.value,
                e.target.email.value
            );
        }
        
        console.log('sumbit data');
    }
    

return(
      <div className="container2">
          <div className="box2">
              <div className="content1">
                  <header>Sign Up</header>
                <form action="/" method="post" onSubmit={onSignUpData}>
                    <input className="username" type="text" name="username"  placeholder="username"></input>
                    <input className="password" type="password" name="password" placeholder="password"></input>
                    <input className="email" type="text" name="email" placeholder="email"></input>
                    <input className="submit" type="submit" value="submit"></input>
                </form>
              </div>
              <div className="content2">
                <div className="img"></div>
                <h3>Lorem Ipsum</h3>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            </div>
      </div>
   )

 }

export default SingUp