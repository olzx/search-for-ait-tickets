import "./ShowInfoTickedCard.scss"
import Modal from "../Modal/Modal"
import Button from "../Button/Button"

export default function ShowInfoTickedCard({
    isOpenModal,
    onCloseModal,
    selectTicketCard,
}) {
    return (
        <Modal isOpen={isOpenModal}>
            <h3>Информация о перелете</h3>
            <hr />
            <div className="flightInfo">
                <div className="flightInfo__left">
                    <div className="flightInfo__time">
                        {selectTicketCard.flightInfo.departureTime[0]}
                    </div>
                    <div className="flightInfo__city">
                        {selectTicketCard.flightInfo.origin}
                    </div>
                    <div className="flightInfo__date">
                        {selectTicketCard.flightInfo.departureTime[1]}
                    </div>
                </div>
                <div className="flightInfo__middle">
                    <div className="flightInfo__duration">
                        В пути: {selectTicketCard.flightInfo.duration}
                    </div>
                </div>
                <div className="flightInfo__right">
                    <div className="flightInfo__time">
                        {selectTicketCard.flightInfo.arrivalTime[0]}
                    </div>
                    <div className="flightInfo__city">
                        {selectTicketCard.flightInfo.destination}
                    </div>
                    <div className="flightInfo__date">
                        {selectTicketCard.flightInfo.arrivalTime[1]}
                    </div>
                </div>
            </div>
            <ul>
                <li>
                    Авиакомпания: <b>{selectTicketCard.airline}</b>
                </li>
                <li>
                    Стоимость: <b>{selectTicketCard.price}</b>
                </li>
                <li>
                    Класс перелета: <b>{selectTicketCard.class}</b>
                </li>
                <li>
                    Наличие багажа:{" "}
                    <b>{selectTicketCard.baggage ? "Да" : "Нет"}</b>
                </li>
                <li>
                    Города для пересадки:{" "}
                    {selectTicketCard.transfers ? (
                        <ul>
                            {selectTicketCard.transferLocations.map(
                                (transfer) => (
                                    <li key={transfer}>{transfer}</li>
                                )
                            )}
                        </ul>
                    ) : (
                        <span>Нет</span>
                    )}
                </li>
            </ul>
            <hr />
            <footer className="showInfoTickedCard__bottom">
                <Button onClick={() => onCloseModal()}>Закрыть</Button>
                <Button isActive={true} onClick={() => onCloseModal()}>
                    Забронировать
                </Button>
            </footer>
        </Modal>
    )
}
