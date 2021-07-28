import { useState } from "react";
import axios from "axios";


const cancion = {titulo: "Hola mundillo", autor:"Yo", genero:"js", lanzamiento:2000, urlLetra:"letritas"}

const ApiManager = () => {

    const [urlBase, setUrlBase] = useState("")
    //setUrlBase("http://localhost:63850/api/canciones/")
    setUrlBase("http://localhost:5000/api/canciones")

    const clickGuardar = () => {
        //create
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
    }

    const clickGet = () => {
       //get all
       axios.get(urlBase)
       .then( res => {
           console.log("datos traidos: ", res.data)
       }).catch( e => {
           console.log("Error al traer lista de canciones ", e)
       })
    }

    const clickPut = () => {
        //put
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
    }

    const clickDelete = () => {
        //delete
        const _id = 3
        const urlD = urlBase + _id
        axios.delete({
            method: 'delete',
            url: urlD,
            data: {
                id: _id
            }
        })
    }

    return (
        <div>
            <nav>
                <input type="button" value="create" onClick={()=> clickGuardar()}/>
                <input type="button" value="get all" onClick={()=> clickGet()}/>
                <input type="button" value="put" onClick={()=> clickPut()}/>
                <input type="button" value="delete" onClick={()=> clickDelete()}/>
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