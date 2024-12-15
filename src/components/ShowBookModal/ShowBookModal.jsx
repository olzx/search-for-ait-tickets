import "./ShowBookModal.scss"
import Button from "../Button/Button"
import Modal from "../Modal/Modal"
import { useState } from "react"

export default function ShowBookModal({ isOpenModal, onCloseModal }) {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
        const phoneNumberString = "\nНомер телефона: " + phone
        const nameString = "\nИмя: " + name
        alert("Данные отправлены...\n" + nameString + phoneNumberString)

        onCloseModal()
    }

    return (
        <Modal isOpen={isOpenModal}>
            <p>
                <b>
                    Вы хотите забронировать билет, введите пожалуйста ваши
                    контактные данные:
                </b>
            </p>
            <form className="bookModal" onSubmit={handleSubmit}>
                <label htmlFor="name">Ваше имя</label>
                <input
                    type="text"
                    id="name"
                    className="bookModal__control"
                    onChange={(event) => setName(event.target.value)}
                />

                <label htmlFor="phoneNumber">Номер телефона</label>
                <input
                    type="number"
                    id="phoneNumber"
                    className="bookModal__control"
                    onChange={(event) => setPhone(event.target.value)}
                />

                <Button isActive={true}>Отправить</Button>
            </form>
            <hr />
            <Button onClick={() => onCloseModal()}>Закрыть</Button>
        </Modal>
    )
}
