import { useState } from "react"
import axios from "axios"


function ShowSongs () {
    const [cancion, setCancion] = useState("")
    const urlBase = "http://localhost:8080/api/canciones"

    const traerListaCanciones = () => {
        //GET Lista de canciones
    axios.get(urlBase)
    .then( res => {
        console.log("datos traidos: ", res.data)
        setCancion(res.data)
    }).catch( e => {
        console.log("Error al traer lista de canciones ", e)
    })
    }
    
    return (
        <div>
            <input onClick= { ()=> traerListaCanciones()} type="button" value="Presione para traer la lista de canciones"/>
            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Titulo</td>
                        <td>Autor</td>
                        <td>Lanzamiento</td>
                        <td>Genero</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{cancion.id}</td>
                        <td>{cancion.titulo}</td>
                        <td>{cancion.autor}</td>
                        <td>{cancion.lanzamiento}</td>
                        <td>{cancion.genero}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ShowSongs