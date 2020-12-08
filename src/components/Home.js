import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Loading from './common/Loading'

// Hold starships in state
// Obtain all of the starships from the API and render in (useeffect)
// <Home> a clickable <Link> (imported from react-router-dom) for each starship. 
// The link should be styled to look like a button and contain the text of the starship's name.

const Home = () => {
    const [starships, setStarships] = useState([])

    // handling loader
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('https://swapi.dev/api/starships').then((res) => {
            console.log(res.data.results)
            setStarships(res.data.results) 
        }).then(() => setLoading(false))
    }, [])

    const display = () => {
        if(loading){
            return <Loading />
        }else{
            starships.map((starship, index) => {
                console.log(starship.name)
                return (
                    <div key={index} className="starship">
                        <Link
                            to={{
                            pathname: '/starship',
                            state: starship
                            }}
                            key={starship.name}
                        >
                            <h3>{starship.name}</h3>
                        </Link>
                    </div>
                )
            }) 
        } 
    }

    return (
        <div>
            <div className="container">
                {display()}
            </div>
        </div>
    )
}

export default Home
