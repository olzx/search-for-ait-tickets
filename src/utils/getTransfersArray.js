// извлекает кол-во пересадок из массива, убирает совпадения и сортирует
export default function getTransfersArray(tickets) {
    // создаем массив с кол-вом пересадок
    const transfersArray = tickets.map((ticket) => ticket.transfers)
    // Удаление повторяющихся значений и сортировка массива по возрастанию
    const sortedTransfersArray = [...new Set(transfersArray)].sort(
        (a, b) => a - b
    )

    return sortedTransfersArray
}
