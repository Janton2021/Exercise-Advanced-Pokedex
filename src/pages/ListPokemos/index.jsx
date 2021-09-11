import { useEffect } from "react"
import axios from "axios"

export default () => {
    const api = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'

    useEffect(async () => {
        const result = await axios.get(api)

        console.info('> result: ', result)
    }, [])
    return (
        <section>
            <h1>Welcome</h1>
        </section>
    )
}