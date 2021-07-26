import { useState } from "react"
import axios from "axios"


//Recibe un objeto de tipo Cancion con los atributos de la cancion
function PutSongs (props) {
    const [cancion, setCancion] = useState("")
    const urlBase = "http://localhost:63850/api/canciones"

    const guardarCanciones = () => {
        //PUT cancion en Lista de canciones
        setCancion(props)
        axios.post({
            method: 'put',
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

export default PutSongs