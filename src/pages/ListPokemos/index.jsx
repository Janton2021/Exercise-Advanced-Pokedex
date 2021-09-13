import { useState, useEffect } from "react"
import axios from "axios"

export default () => {
    const api = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'
    const [pokemons, setPokemons] = useState ([])


    console.log(pokemons)
    useEffect(async () => {
        const result = await axios.get(api)
        setPokemons(result.data.results)
    }, [])
    return (
        <section>
            <h1>Welcome</h1>
        </section>
    )
}