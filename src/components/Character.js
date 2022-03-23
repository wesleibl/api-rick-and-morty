import {useEffect, useState} from 'react'

import styles from '../components/css/Character.module.css'

function Character({id}){

    const [char, setChar] = useState([])
    const [charOrigin, setCharOrigin] = useState([])
    const [charEpisodes, setcharEpisodes] = useState([])
    
    const episodes = [];

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
            setChar(data)
            setCharOrigin(data.origin.name)
            
            //Episodes
            data.episode.length = 3
            for (let i = 0; i < data.episode.length; i++){
                episodes.push(data.episode[i])
                episodes.slice(0,2);

                fetch(episodes[i] , {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                    .then((resp) => resp.json())
                    .then(data => {
                        setcharEpisodes((prev) => [...prev, data])
                    })
                    .catch((err) => console.log(err))
            }
        })
        .catch((err) => console.log(err))
    },[id])

    return (
        <div className={styles.character_main}>
            <div className={styles.name}>
                <h2>{char.name}</h2>
                <img src={char.image} alt={`${char.name}_img`}/>
            </div>
            <div className={styles.content}>
                <div className={styles.status}>
                    <p>Status: <span>{char.status}</span></p>
                </div>
                <div className={styles.origin}>
                    <p>Planeta de origem: <span>{charOrigin}</span></p>
                </div>
                <div className={styles.episodes}>
                    <h4>Episódios</h4>
                    {charEpisodes.name}
                    {charEpisodes.map(episode => 
                        <div className={styles.episodes} key={episode.id}>
                        <p><span>{episode.name}</span></p> 
                        <p>Data de lançamento: {episode.air_date}</p>
                        <p>Numero: {episode.episode}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
export default Character
