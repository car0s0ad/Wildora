
import axios from "axios"

//Recibe un objeto de tipo Cancion y el id para borrar
function DeleteSongs (id) {
    const urlBase = "http://localhost:63850/api/canciones"
    const borrarCancion = () => {
        //Delete cancion
        axios.delete({
            method: 'delete',
            url: urlBase,
            data: {
                id: id
            }
        })
    }
    
    return (
        <div>
            <input onClick= { ()=> borrarCancion()} type="button" value="Presione para borrar una cancion de la lista"/>
        </div>
    )
}

export default DeleteSongs