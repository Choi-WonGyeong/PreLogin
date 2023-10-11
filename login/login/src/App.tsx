import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Components/Button';
import Id from './Components/Id';
import Pw from './Components/Password'
import Logo from './image/Logo.png';
import { LogoI } from './Components/Image/image';



// 늦어서 죄송합니다 ㅠㅠㅠㅠ

function App() {
  const handleClick = () => {
    alert("로그인 되었습니다.");
  };
  return (
    <>
      <div>
        <LogoI src={Logo}/>
        <Id label="ID"/>
        <Pw label="PW"/>       
        <Button label = {"ENTRAR"} onClick={handleClick}/>
      </div>
    </>
  );
}

export default App;
