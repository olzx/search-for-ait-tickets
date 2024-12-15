import { useEffect, useState } from "react"
import fakeFetch from "../api/fakeFetch"
import { transformTicketsData } from "../utils/format"

export default function useGetTickets() {
    const [tickets, setTickets] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchTickets() {
            try {
                const data = await fakeFetch("/tickets")
                setTickets(transformTicketsData(data))
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
