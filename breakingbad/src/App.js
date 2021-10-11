import React from 'react';
import styled from '@emotion/styled';
import logo from "./img/logo.svg"
import Frase from './components/Frase';


const Logo = styled.img`

  height: 200px;
  width: 300px;
  margin: auto auto;
  
`


function App() {
  return (

      <div>

        <Logo src={logo} alt="" />
        <Frase/>
        
      </div> 
     
 
  );
}

export default App;
