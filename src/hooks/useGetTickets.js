import { useEffect, useState } from "react"
import fakeFetch from "../api/fakeFetch"

export default function useGetTickets() {
    const [tickets, setTickets] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    console.log(loading)

    useEffect(() => {
        async function fetchTickets() {
            try {
                const data = await fakeFetch("/tickets")
                setTickets(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        fetchTickets()
    }, [])

    return { tickets, loading, error }
}
