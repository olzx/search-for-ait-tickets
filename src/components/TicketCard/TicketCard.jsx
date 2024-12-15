import "./TicketCard.scss"

export default function TicketCard({ ticketData }) {
    return (
        <div className="ticketCard">
            <div className="ticketCard__leftPanel">
                <div className="ticketCard__price">{ticketData.price}</div>
                <div className="selectButton">Выбрать билет</div>
            </div>
            <div className="ticketCard__rightPanel">
                <div className="ticketCard__upPanel">
                    <div className="airline">
                        <div className="airline__name">
                            {ticketData.airline}
                        </div>
                    </div>
                </div>
                <div className="ticketCard__middlePanel">
                    <div className="flightInfo">
                        <div className="flightInfo__left">
                            <div className="flightInfo__time">
                                {ticketData.flightInfo.departureTime[0]}
                            </div>
                            <div className="flightInfo__city">
                                {ticketData.flightInfo.origin}
                            </div>
                            <div className="flightInfo__date">
                                {ticketData.flightInfo.departureTime[1]}
                            </div>
                        </div>
                        <div className="flightInfo__middle">
                            <div className="flightInfo__duration">
                                В пути: {ticketData.flightInfo.duration}
                            </div>
                        </div>
                        <div className="flightInfo__right">
                            <div className="flightInfo__time">
                                {ticketData.flightInfo.arrivalTime[0]}
                            </div>
                            <div className="flightInfo__city">
                                {ticketData.flightInfo.destination}
                            </div>
                            <div className="flightInfo__date">
                                {ticketData.flightInfo.arrivalTime[1]}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ticketCard__downPanel">
                    <div className="transfers">
                        <div className="transfers__amount">
                            Пересадки - {ticketData.transfers}
                        </div>
                        <div className="transfers__locations">
                            {ticketData.transfers ? (
                                ticketData.transferLocations.join(", ")
                            ) : (
                                <span></span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
