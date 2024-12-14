import { useState } from "react"
import "./CheckboxButton.scss"

export default function CheckboxButton({ children, isActive, ...props }) {
    const isCheckmark = isActive && <span>&#x2713;</span>

    return (
        <div className="checkbox-button" {...props}>
            <div className="checkbox-button__square">
                <div className="checkbox-button__checkmark">{isCheckmark}</div>
            </div>
            <div className="checkbox-button__label">{children}</div>
        </div>
    )
}
