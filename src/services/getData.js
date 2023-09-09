export async function fetchData() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        if(!res.ok) throw new Error('Ha pasado un error con la API')
        const json = await res.json()
        return json
    } catch (err) {
        throw new Error('Faild fetching data')
    }
}