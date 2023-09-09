import { useState } from "react"
import useGetData from "./hooks/useGetData"

const App = () => {

    const { data } = useGetData() // Es una caja negra que lo único que nos importa exponer es el la variable que vayamos a utilizar.
    const [dataFiltered, setDataFiltered] = useState() //El estado para colocar el array filtrado.

    function filterByPhone(event) { //Event es un evento que tienen varios elementos del DOM https://developer.mozilla.org/es/docs/Web/API/Event.
        const filterName = data.filter(user => user.phone === event.target.name)
        setDataFiltered(filterName)
    }


    return (
        <main>
            <section>
                <h1>Usuarios</h1>
                <ul>
                    {
                        dataFiltered //Render condicional si el estado "dataFiltered" tiene algo lo mapeamos "dataFiltered".
                            ? dataFiltered?.map((user, index) => (
                                <li key={index}>
                                    <p>{user.name} ---- {user.phone}</p>
                                </li>
                            ))
                            : data?.map((user, index) => ( //Sino mapeamos lo que tiene la variable data que viene del custom hook.
                                <li key={index}>
                                    <p>{user.name} ---- {user.phone}</p>
                                </li>
                            ))
                    }
                </ul>
            </section>
            <section>
                <h1>Filtros</h1>
                <div id="buttons">
                    <button name="1-463-123-4447" onClick={filterByPhone}>Filtrar por numero 1-463-123-4447</button>
                    <button name="210.067.6132" onClick={filterByPhone}>Filtrar por número 210.067.6132</button>
                    
                    <button  //Vaciamos el "dataFiltered" para mostrar la data original.
                    onClick={() => setDataFiltered()}> 
                        Quitar filtro
                    </button>
                </div>
            </section>
        </main>
    )
}

export default App
