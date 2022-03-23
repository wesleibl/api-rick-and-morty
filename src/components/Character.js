import {useEffect, useState} from 'react'

import styles from '../components/css/Character.module.css'

function Character({id}){

    const [char, setChar] = useState([])
    const [planetOrigin, setPlanetOrigin] = useState([])

    //character
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}` , {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            setChar(data)
        })
        .catch((err) => console.log(err))
    },[id])

    return (
        <div className={styles.character_main}>
        <div>
            <p>Name: <span>{char.name}</span></p>
            <img src={char.image} alt={`${char.name}_img`}/>
        </div>
        </div>
    )
}
export default Character