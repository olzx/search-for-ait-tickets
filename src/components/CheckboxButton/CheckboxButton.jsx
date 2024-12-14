import "./CheckboxButton.css"

export default function CheckboxButton({ children }) {
    return (
        <div className="checkbox-button">
            <div className="checkbox-button__square">
                <div className="checkbox-button__checkmark">&#x2713;</div>
            </div>
            <div className="checkbox-button__label">{children}</div>
        </div>
    )
}
