import { createPortal } from "react-dom"
import "./Modal.scss"
import { useEffect } from "react"

export default function Modalinfo({ children, isOpen }) {
    useEffect(() => {
        if (isOpen) document.body.classList.add("no-scroll")
        return () => document.body.classList.remove("no-scroll")
    }, [isOpen])

    if (!isOpen) return null

    return createPortal(
        <>
            <div className="modal">
                <dialog open={isOpen}>{children}</dialog>
            </div>
        </>,
        document.getElementById("modal")
    )
}
