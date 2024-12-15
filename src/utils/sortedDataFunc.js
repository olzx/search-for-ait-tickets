import { useMemo } from "react"

export default function sortedDataFunc(filterData, sorting) {
    return useMemo(() => {
        return [...filterData].sort((a, b) => {
            switch (sorting) {
                case "lowPrice":
                    return a.priceInt - b.priceInt
                case "fast":
                    return a.flightInfo.durationInt - b.flightInfo.durationInt
            }
        })
    }, [filterData, sorting])
}
