import CheckboxButton from "../CheckboxButton/CheckboxButton"
import "./Transfer.css"

export default function Transfer() {
    return (
        <div className="transfer">
            <p className="transfer__title">Количество пересадок</p>
            <CheckboxButton>Все</CheckboxButton>
            <CheckboxButton>Без пересадки</CheckboxButton>
            <CheckboxButton>1 пересадка</CheckboxButton>
        </div>
    )
}
