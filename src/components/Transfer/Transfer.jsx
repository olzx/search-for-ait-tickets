import { useState } from "react"
import CheckboxButton from "../CheckboxButton/CheckboxButton"
import "./Transfer.css"

export default function Transfer({ onClick }) {
    const [tabName, setTabName] = useState("all")

    function toggleTabName(name) {
        setTabName(name)
        onClick && onClick(tabName)
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
            <CheckboxButton
                onClick={() => toggleTabName("one")}
                isActive={tabName == "one"}
            >
                1 пересадка
            </CheckboxButton>
        </div>
    )
}
