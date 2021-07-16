import React from 'react'


export default function CharactersDetails({info, action}) {
    return (
       
        <button onClick={() => action(info)}>
            {info.name}<br></br><div>Reveal</div>
        </button>
  
    )
    }   
    


