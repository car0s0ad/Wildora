import { useState } from "react"
import axios from "axios"


//Recibe un objeto de tipo Cancion con los atributos de la cancion
function SaveSongs (props) {
    const [cancion, setCancion] = useState("")
    const urlBase = "http://localhost:8080/api/canciones"

    const guardarCanciones = () => {
        //POST cancion en Lista de canciones
        setCancion(props)
        axios.post({
            method: 'post',
            url: urlBase,
            data: {
                titulo: cancion.titulo,
                autor: cancion.autor,
                lanzamiento: cancion.lanzamiento,
                genero: cancion.genero
            }
        })
    }
    
    return (
        <div>
            <input onClick= { ()=> guardarCanciones()} type="button" value="Presione para guardar la lista de canciones"/>
        </div>
    )
}

export default SaveSongs