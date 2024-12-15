import { useMemo } from "react"

export default function filterDataFunc(tickets, transfer) {
    return useMemo(() => {
        return [...tickets].filter((ticket) => {
            switch (transfer) {
                case "all":
                    return true
                case "without":
                    return ticket.transfers == 0
                default:
                    return ticket.transfers == Number(transfer)
            }
        })
    }, [tickets, transfer])
}
