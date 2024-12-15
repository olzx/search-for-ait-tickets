function formatRubles(amount) {
    // Преобразуем число в строку с разделением тысяч пробелами
    const formattedAmount = amount
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, " ")

    return `${formattedAmount} Руб`
}

function formatDateTime(dateTimeString) {
    // Создаем объект даты
    const date = new Date(dateTimeString)

    // Массив месяцев для форматирования
    const months = [
        "января",
        "февраля",
        "марта",
        "апреля",
        "мая",
        "июня",
        "июля",
        "августа",
        "сентября",
        "октября",
        "ноября",
        "декабря",
    ]

    // Форматируем дату и время
    const day = date.getDate()
    const month = months[date.getMonth()]
    const formattedDate = `${day} ${month}`

    const hours = date.getHours().toString().padStart(2, "0")
    const minutes = date.getMinutes().toString().padStart(2, "0")
    const formattedTime = `${hours}:${minutes}`

    return [formattedTime, formattedDate]
}

function formatDuration(minutes) {
    // Проверяем, что входное значение - число
    if (typeof minutes !== "number" || minutes < 0) {
        throw new Error("Входное значение должно быть неотрицательным числом")
    }

    const days = Math.floor(minutes / (24 * 60))
    const hours = Math.floor((minutes % (24 * 60)) / 60)
    const mins = minutes % 60

    let result = ""
    if (days > 0) result += `${days}д `
    if (hours > 0) result += `${hours}ч `
    if (mins > 0) result += `${mins}м`

    return result.trim()
}

export function transformTicketsData(ticketsArray) {
    return ticketsArray.map((ticketData) => {
        return {
            id: ticketData.id, // id
            price: formatRubles(ticketData.price), // цена билета
            airline: ticketData.airline, // авиакомпания
            baggage: ticketData.baggage, // багаж true/false
            class: ticketData.class, // класс эконом/бизнес
            flightInfo: {
                arrivalTime: formatDateTime(ticketData.flightInfo.arrivalTime), // время прибытия
                departureTime: formatDateTime(
                    ticketData.flightInfo.departureTime
                ), // время вылета
                destination: ticketData.flightInfo.destination, // место назначения
                duration: formatDuration(ticketData.flightInfo.duration), // продолжительность
                origin: ticketData.flightInfo.origin, // место вылета
            },
            transfers: ticketData.transfers, // кол-во пересадок
            transferLocations: ticketData?.transferLocations, // массив городов пересадок
        }
    })
}
