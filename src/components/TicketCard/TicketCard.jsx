import "./TicketCard.scss"

export default function TicketCard() {
    return (
        <div className="ticketCard">
            <div className="ticketCard__leftPanel">
                <div className="ticketCard__price">10 000 Руб</div>
                <div className="selectButton">Выбрать билет</div>
            </div>
            <div className="ticketCard__rightPanel">
                <div className="ticketCard__upPanel">
                    <div className="airline">
                        <div className="airline__name">Аэрофлот</div>
                    </div>
                </div>
                <div className="ticketCard__middlePanel">
                    <div className="flightInfo">
                        <div className="flightInfo__left">
                            <div className="flightInfo__time">05:10</div>
                            <div className="flightInfo__city">Новосибирск</div>
                            <div className="flightInfo__date">15 дек</div>
                        </div>
                        <div className="flightInfo__middle">
                            <div className="flightInfo__duration">
                                В пути: 1д 12ч 25м
                            </div>
                        </div>
                        <div className="flightInfo__right">
                            <div className="flightInfo__time">17:35</div>
                            <div className="flightInfo__city">Пхукет</div>
                            <div className="flightInfo__date">16 дек</div>
                        </div>
                    </div>
                </div>
                <div className="ticketCard__downPanel">
                    <div className="transfers">
                        <div className="transfers__amount">Пересадки - 5</div>
                        <div className="transfers__locations">
                            Париж, Нью-Йорк, Мехико, Сантьяго, Богото
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
