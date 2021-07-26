import { useState } from "react";
import axios from "axios";


const cancion = {titulo: "Hola mundillo", autor:"Yo", genero:"js", lanzamiento:2000, urlLetra="letritas"}

const ApiManager = () => {
    const [opcion, setOpcion] = useState(0)

    const clickGuardar = () => {
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
        const urlBase = "http://localhost:63850/api/canciones/"
            //POST cancion en Lista de canciones
            axios.post({
                method: 'post',
                url: urlBase,
                data: {
                    titulo: cancion.titulo,
                    autor: cancion.autor,
                    lanzamiento: cancion.lanzamiento,
                    genero: cancion.genero,
                    urlLetra: cancion.urlLetra
                }
            })
            
            break;
        case 2: //get all
    
        axios.get(urlBase)
        .then( res => {
            console.log("datos traidos: ", res.data)
        }).catch( e => {
            console.log("Error al traer lista de canciones ", e)
        })
        
            break

        case 3: //put
        const id = 2
        const url = urlBase + id 
    
            //PUT cancion en Lista de canciones
            axios.post({
                method: 'put',
                url: url,
                data: {
                    titulo: cancion.titulo,
                    autor: cancion.autor,
                    lanzamiento: cancion.lanzamiento,
                    genero: cancion.genero
                }
            })
            break
        
        case 4: //delete
        const _id = 3
        const urlD = urlBase + _id
        axios.delete({
            method: 'delete',
            url: urlD,
            data: {
                id: _id
            }
        })
            break

        default:
            console.log("opcion incorrecta")
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