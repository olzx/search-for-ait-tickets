import "./app.scss"
import Sorting from "./components/Sorting/Sorting"
import TicketCard from "./components/TicketCard/TicketCard"
import Transfer from "./components/Transfer/Transfer"

export default function App() {
    return (
        <>
            <Transfer
                onClick={(tabName) =>
                    console.log("В блоке Transfer выбрана вкладка: " + tabName)
                }
            />
            <Sorting
                onClick={(tabName) =>
                    console.log("В блоке Sorting выбрана вкладка: " + tabName)
                }
            />
            <TicketCard></TicketCard>
            <TicketCard></TicketCard>
            <TicketCard></TicketCard>
        </>
    )
}
