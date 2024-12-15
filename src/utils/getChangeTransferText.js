// возвращает готовую строку в зависимости от передаваемого числа

export default function getChangeTransferText(count) {
    if (count === 1) {
        return `${count} пересадка`
    } else if (count >= 2 && count <= 4) {
        return `${count} пересадки`
    } else {
        return `${count} пересадок`
    }
}
