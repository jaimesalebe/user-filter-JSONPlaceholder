import { useEffect, useState } from "react"
import { fetchData } from "../services/getData"

function useGetData() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetchData().then(json => setData(json))
    }, [])


    return {data}
}

export default useGetData