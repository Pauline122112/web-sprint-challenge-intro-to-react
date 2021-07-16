import React from 'react'
import styled, { keyframes } from 'styled-components'


const StyledCharacter= styled.button`
border: 2px solid black;
width: 15%;
margin-left: 1%;
padding: 15px;
font-weight: normal;
opacity: 0.7;
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
    


