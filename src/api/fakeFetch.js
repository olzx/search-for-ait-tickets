export default async function fakeFetch(url) {
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            try {
                const response = await fetch("/dataBase.json")
                const data = await response.json()

                if (url.includes("/tickets")) {
                    resolve(data.tickets)
                } else {
                    reject(new Error("Invalid URL"))
                }
            } catch (error) {
                reject(error)
            }
        }, 3000)
    })
}
