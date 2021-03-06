import React,{ useState} from 'react';
// import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import './App.css';
import SingUp from './components/SignUp';
import LoginPage from './components/LoginPage';
import LoginOn from './components/LoginOn';

function App() {
  console.log('app render');

  const [mode,setMode] = useState('login');

  // submit-> LoginPage Change

  let _contents = null;

  const onSignUpPage = () =>{
    setMode('signup');
  }

  const onLoginPage = () =>{
    setMode('login');
  }
  
  
  // data receive from signup 
  
  
  const [data,setData] = useState([
  ]);
  
  const [userdata,setUserdata] =useState();
  const [emaildata,setEmaildata] =useState();

  let _username = null;
  let _password = null;
  let _email = null;
  
  const onSign = (_username,_password,_email) =>{
    let _data = data.concat(
      {username:_username, password:_password, email:_email}
      );
      setData(_data);
      setMode('login');
    }

  const onLogin = (_username,_password) =>{
    let i = 0;
    while(i < data.length){
      let datas = data[i];
      if(datas.username === _username){
        if(datas.password === _password){
          setUserdata(datas.username);
          setEmaildata(datas.email);
          console.log('datas.username',datas.username);
          setMode('loginOn');
          break;
        }else{
          alert('check');
          break;
        }
      }
      i = i + 1;
    }
  }

    
    if(mode === 'login'){
      _contents = <LoginPage onSignUp={onSignUpPage} Login={onLogin}></LoginPage>
    }else if(mode === 'signup'){
      _contents = <SingUp onLogin={onLoginPage} SignOn={onSign}></SingUp>
    }else if(mode === 'loginOn'){console.log('username',_username);
      _contents = <LoginOn userName={userdata} eMail={emaildata} onLoginPage={onLoginPage}></LoginOn>
    }

    
  return (
      <div className="App">
        <div className="background-img"></div>
        {_contents}
      </div>
  );
}

export default App;
