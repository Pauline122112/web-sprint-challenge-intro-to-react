import React from 'react'
import styled from 'styled-components'

const JediMindTricks = styled.div`
color:black;
display:block;
background-color: lightgrey;
opacity: 0.7;
text-align:center;
margin:20%;
align-items: center;
border:3px solid lightgray;
padding:0px 20px;
font-weight: bold;
font-size: 20px;
`

export default function JediPowers(props) {
    const { jediInfo, close } = props
 return(
        <JediMindTricks>
            <h3>Details of {jediInfo.name}</h3>
                <p>Gender: {jediInfo.gender}</p>
                <p>Height: {jediInfo.height}</p>
                <p>Mass: {jediInfo.mass}</p>
                <p>BirthYear: {jediInfo.birth_year}</p>
                <p>Eye Color: {jediInfo.eye_color}</p>
                <p>Hair Color: {jediInfo.hair_color}</p>
                <p>Skin Color: {jediInfo.skin_color}</p>
            <button onClick={close}>Close</button>
        </JediMindTricks>
        )


}