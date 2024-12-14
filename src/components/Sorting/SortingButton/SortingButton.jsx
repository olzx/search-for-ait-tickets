import "./SortingButton.scss"

export default function SortingButton({ children, isActive, ...props }) {
    const classIsActive = isActive
        ? "sorting__button sorting__button_active"
        : "sorting__button"

    return (
        <div className={classIsActive} {...props}>
            {children}
        </div>
    )
}
