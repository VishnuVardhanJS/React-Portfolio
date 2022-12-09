import React, {useState, useEffect, createContext, useContext} from 'react'
import axios from 'axios'

export const setStates = createContext()

export function StateProvider(props) {

    const [population, setPopulation] = useState('')

    const FetchPopulation = () => {
        axios.get(`https://get-population.p.rapidapi.com/population`, {
            headers: {
                'x-rapidapi-host': 'get-population.p.rapidapi.com',
                'x-rapidapi-key': 'API_KEY',
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
            population, setPopulation, FetchPopulation
        }}>
        {props.children}
        </setStates.Provider>
    )
}


export default StateProvider
