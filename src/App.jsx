import { useMemo, useState } from "react"
import "./app.scss"
import airPlane from "./assets/airPlane.jpg"
import Sorting from "./components/Sorting/Sorting"
import TicketCard from "./components/TicketCard/TicketCard"
import Transfer from "./components/Transfer/Transfer"
import useGetTickets from "./hooks/useGetTickets"

export default function App() {
    const { tickets, loading, error } = useGetTickets()
    const [sorting, setSorting] = useState("lowPrice")
    const [transfer, setTransfer] = useState("all")

    const filterData = useMemo(() => {
        return [...tickets].filter((ticket) => {
            switch (transfer) {
                case "all":
                    return true
                case "without":
                    return ticket.transfers == 0
            }
        })
    }, [tickets, transfer])

    const sortedData = useMemo(() => {
        return [...filterData].sort((a, b) => {
            switch (sorting) {
                case "lowPrice":
                    return a.priceInt - b.priceInt
                case "fast":
                    return a.flightInfo.durationInt - b.flightInfo.durationInt
            }
        })
    }, [filterData, sorting])

    return (
        <>
            {loading && <span>Загрузка...</span>}
            {!loading && (
                <>
                    <div className="image">
                        <img className="image__content" src={airPlane} alt="" />
                    </div>
                    <div className="content">
                        <div className="content__leftPanel">
                            <Transfer
                                onClick={(tabName) => setTransfer(tabName)}
                                ticketsData={tickets}
                            />
                        </div>
                        <div className="content__rightPanel">
                            <Sorting
                                onClick={(tabName) => setSorting(tabName)}
                            />
                            {sortedData.map((ticket) => (
                                <TicketCard
                                    key={ticket.id}
                                    ticketData={ticket}
                                ></TicketCard>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </>
    )
}
