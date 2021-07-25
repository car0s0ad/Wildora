import { useState } from "react";
import axios from "axios";


const cancion = {titulo: "Hola mundillo", autor:"Yo", genero:"js", lanzamiento:2000,}

const ApiManager = () => {
    const [opcion, setOpcion] = useState("")

    const clickGuardar = ()=>{
        setOpcion(1)
    }

    const clickGet = () => {
        setOpcion(2)
    }

    const clickPut = () => {
        setOpcion(3)
    }

    const clickDelete = () => {
        setOpcion(4)
    }


    switch (opcion) {
        case 1: //create
        const urlBase = "http://localhost:8080/api/canciones"
            //POST cancion en Lista de canciones
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
            
            break;
        case 2: //get all
            break

        case 3: //put
            break
        
        case 4: //delete
            break
        default:
            break;
    }



    return (
        <div>
            <nav><input type="button" name="create" onClick={clickGuardar()}/>
            <input type="button" name="get all" onClick={clickGet()}/>
            <input type="button" name="put" onClick={clickPut()}/>
            <input type="button" name="delete" onClick={clickDelete()}/>
            </nav>

        <table>
            <tbody>
                <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                </tr>
            </tbody>
        </table>
            
        </div>
    )
}

export default ApiManager;