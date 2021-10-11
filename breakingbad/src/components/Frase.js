import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';


const Bloque = styled.div`
    background-color: white;
    height: 100%;
    width: 700px;
    margin: 40px 0px;
    display: block;
    padding:  10px
`
const Button = styled.button`
    background-color: white;
    padding: 10px 30px;
    background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
    font-weight: bold;
    font-size: 30px;
    color: white;   
`

const Owner = styled.h3`
    color: gray;
    font-size: 25px;
    font-style: italic;
`
const Titulo = styled.h1`
    color: Black;
    font-size: 45px;
    font-style: bold;
`



function Frase() {
    
    const [texto, setTexto] = useState({})


   
const traerFrase = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json()
    setTexto(frase[0]);
}
useEffect(() => {
        traerFrase()

},[]);

    return (


        <div>
            <Bloque>

                <Titulo>{texto.quote}</Titulo>

                <Owner>{texto.author}</Owner>
            
            </Bloque>
            <Button onClick={traerFrase}>Obtener Frase</Button>
        </div>
    )
}

export default Frase
