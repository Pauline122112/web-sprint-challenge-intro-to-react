import React from 'react'
import styled, { keyframes } from 'styled-components'

//add css styles
const StyledCharacter= styled.button`

border-radius: 3px;
border: 2px solid darkbrown;
width: 15%;
margin-left: 1%;
padding: 15px;
font-weight: normal;
opacity: 0.7;
&:hover{
transform: scale(1.1);
}
`




export default function CharactersDetails({info, action}) {
    return (
       
        <>
        <StyledCharacter onClick={() => action(info)}>
            {info.name}<div></div>
        </StyledCharacter>
        </>
    )
    }   
    


