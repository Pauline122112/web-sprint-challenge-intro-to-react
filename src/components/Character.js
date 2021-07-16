import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Characters(props) {
    const {proCharacter, close} = props
    const [details, setDetails] = useState(null);
    
    useEffect(() => {
        console.log('🥇 EFFECT after FIRST DOM surgery')
        return () => {
            console.log('CLEAN UP')
        }
    }, [])
    
    useEffect(() => {
        console.log('🥵 EFFECT after FIRST DOM surgery')
        
        //if you intend to change state here, maker sure to do it conditionally, otherwise INFINITE LOOP!!!
        
        return () => {
            console.log('🥵 CLEANUP after effect right before component gets unmounted')
        }
    })
    
    
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/`)
        .then(res => {
            setDetails(res.data)
        })
        .catch(err => {
            debugger
        })
    }, [proCharacter]);
    
    console.log('component Renders')

    return(
        <div>
            <h3>Details of {details.name}</h3>
            {
                details &&
                <>
                <p>Gender: {details.gender}</p>
                <p>Height: {details.height}</p>
                <p>Mass: {details.mass}</p>
                <p>BirthYear: {details.birth_year}</p>
                <p>Eye Color: {details.eye_color}</p>
                <p>Hair Color: {details.hair_color}</p>
                <p>Skin Color: {details.skin_color}</p>
                </>
            }
            <buttom onClick={close}>Close</buttom>

        </div>
    )
}

