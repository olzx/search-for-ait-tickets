import { useMemo, useState } from "react"
import "./app.scss"
import airPlane from "./assets/airPlane.jpg"
import Sorting from "./components/Sorting/Sorting"
import TicketCard from "./components/TicketCard/TicketCard"
import Transfer from "./components/Transfer/Transfer"
import useGetTickets from "./hooks/useGetTickets"
import filterDataFunc from "./utils/filterDataFunc"
import sortedDataFunc from "./utils/sortedDataFunc"

export default function App() {
    const { tickets, loading, error } = useGetTickets()
    const [sorting, setSorting] = useState("lowPrice")
    const [transfer, setTransfer] = useState("all")

    const filterData = filterDataFunc(tickets, transfer) // фильтрация по кол-ву пересадок
    const sortedData = sortedDataFunc(filterData, sorting) // сортирует уже отфильтрованый массив по самому дешевому или самому быстрому

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
