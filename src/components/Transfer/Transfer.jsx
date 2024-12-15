import { useState } from "react"
import CheckboxButton from "../CheckboxButton/CheckboxButton"
import "./Transfer.scss"
import getTransfersArray from "../../utils/getTransfersArray"
import getChangeTransferText from "../../utils/getChangeTransferText"

export default function Transfer({ onClick, ticketsData }) {
    const [tabName, setTabName] = useState("all")

    function toggleTabName(name) {
        setTabName(name)
        onClick && onClick(name)
    }

    // массив с кол-вом пересадок
    const sortedTransfersArray = getTransfersArray(ticketsData)

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
                        {getChangeTransferText(transfer)}
                    </CheckboxButton>
                ) : null
            )}
        </div>
    )
}
