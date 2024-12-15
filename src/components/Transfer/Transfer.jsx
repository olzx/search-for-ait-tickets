import { useState } from "react"
import CheckboxButton from "../CheckboxButton/CheckboxButton"
import "./Transfer.scss"

export default function Transfer({ onClick, ticketsData }) {
    const [tabName, setTabName] = useState("all")

    function toggleTabName(name) {
        setTabName(name)
        onClick && onClick(name)
    }

    // создаем массив с кол-вом пересадок (что бы далее создать кнопки)
    const transfersArray = ticketsData.map((ticket) => ticket.transfers)
    // Удаление повторяющихся значений и сортировка массива по возрастанию
    const sortedTransfersArray = [...new Set(transfersArray)].sort(
        (a, b) => a - b
    )

    // окончание строки в зависимости от числа
    function getTransfersText(count) {
        if (count === 1) {
            return `${count} пересадка`
        } else if (count >= 2 && count <= 4) {
            return `${count} пересадки`
        } else {
            return `${count} пересадок`
        }
    }

    return (
        <div className="transfer">
            <p className="transfer__title">Количество пересадок</p>
            <CheckboxButton
                onClick={() => toggleTabName("all")}
                isActive={tabName == "all"}
            >
                Все
            </CheckboxButton>
            <CheckboxButton
                onClick={() => toggleTabName("without")}
                isActive={tabName == "without"}
            >
                Без пересадки
            </CheckboxButton>
            {sortedTransfersArray.map((transfer) =>
                transfer !== 0 ? (
                    <CheckboxButton
                        key={transfer}
                        onClick={() => toggleTabName(transfer.toString())}
                        isActive={tabName == transfer.toString()}
                    >
                        {getTransfersText(transfer)}
                    </CheckboxButton>
                ) : null
            )}
        </div>
    )
}
