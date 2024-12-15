import "./Button.scss"

export default function Button({ children, isActive, ...props }) {
    const classActive = isActive ? "button active" : "button"

    return (
        <button className={classActive} {...props}>
            {children}
        </button>
    )
}
