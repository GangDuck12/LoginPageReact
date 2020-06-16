import React,{ useState } from 'react';
import './style.css';
// import {NavLink} from 'react-router-dom';

/**
* @author
* @function LoginPage
**/

const LoginPage = (props) => {

    console.log('LoginPage render');

    const onSignPage = (e) =>{
        e.preventDefault();
        props.onSignUp();
    }

    const onLoginData = (e) => {
        e.preventDefault();
        let username = e.target.username.value;
        let password = e.target.password.value;

        if(!username || !password){
            alert('please enter username and password');
        }else{
            props.Login(
                e.target.username.value,
                e.target.password.value
            );
        }
    }

  return(
    <div className="container1">
        <div className="box1">
            <div className="content1">
                <header>login</header>
                <form action="/" method="post" onSubmit={onLoginData}>
                    <input className="username" type="text" name="username" placeholder="username" ></input>
                    <input className="password" type="password" name="password" placeholder="password"></input>
                    <input className="submit" type="submit" value="submit"></input>
                </form>
                <div className="taga">
                    <input type="button" value="Sign Up" onClick={onSignPage}></input>      
                </div>
            </div>
            <div className="content2">
                <h3>Lorem Ipsum</h3>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div className="img"></div>
            </div>
        </div>
    </div>
   )

 }

export default LoginPage