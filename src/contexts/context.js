import React, {useState, useEffect, createContext, useContext} from 'react'
import axios from 'axios'

/* 

Git ignored api keys add the api keys from the population api
https://rapidapi.com/evikza/api/get-population/

------------xxxxxxxxxxxxxxxxxxxxx-----------------------------

api_keys format: 

{
    "host": "host_name",
    "key": "api_key"
}

*/


const api_keys = require("./api_keys.json")

export const setStates = createContext()

export function StateProvider(props) {

    const [population, setPopulation] = useState('8,000,000,000')
    const [mousePos, setMousePos] = useState({});

    

    const FetchPopulation = () => {
        axios.get(`https://get-population.p.rapidapi.com/population`, {
            headers: {
                'x-rapidapi-host': api_keys['host'],
                'x-rapidapi-key': api_keys['key'],
            },
            // params: { category: 'all', count: '1' },
        })
        .then((res) => {
            setPopulation(res.data.readable_format)
            // console.log(res.data.readable_format)
        }
        )
        .catch((err) => {
            console.log(err)
        })
    }



    return (
        <setStates.Provider value={{
            population, setPopulation, FetchPopulation, mousePos, setMousePos
        }}>
        {props.children}
        </setStates.Provider>
    )
}


export default StateProvider
