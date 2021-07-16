import React from 'react'

export default function JediPowers(props) {
    const { jediInfo, close } = props
 return(
        <div>
            <h3>Details of {jediInfo.name}</h3>
                <p>Gender: {jediInfo.gender}</p>
                <p>Height: {jediInfo.height}</p>
                <p>Mass: {jediInfo.mass}</p>
                <p>BirthYear: {jediInfo.birth_year}</p>
                <p>Eye Color: {jediInfo.eye_color}</p>
                <p>Hair Color: {jediInfo.hair_color}</p>
                <p>Skin Color: {jediInfo.skin_color}</p>
            <buttom onClick={close}>Close</buttom>
        </div>
        )


}