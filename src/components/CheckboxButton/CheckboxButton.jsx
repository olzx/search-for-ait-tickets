import { useState } from "react"
import "./CheckboxButton.css"

export default function CheckboxButton({ onClick, children }) {
    const [isActive, setisActive] = useState(false)

    const isCheckmark = isActive && <span>&#x2713;</span>

    function checboxClick() {
        setisActive((prev) => !prev)
        onClick && onClick(!isActive)
    }

    return (
        <div className="checkbox-button" onClick={checboxClick}>
            <div className="checkbox-button__square">
                <div className="checkbox-button__checkmark">{isCheckmark}</div>
            </div>
            <div className="checkbox-button__label">{children}</div>
        </div>
    )
}
