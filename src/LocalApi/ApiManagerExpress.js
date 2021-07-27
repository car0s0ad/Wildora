import { useEffect, useState } from "react";
import axios from "axios";


const cancion = {titulo: "Hola mundillo", autor:"Yo", genero:"js", lanzamiento:2000, urlLetra:"letritas"}

const ApiManager = () => {
    //const urlBase = "http://localhost:63850/api/canciones/"
    const urlBase = " http://localhost:5000/api/canciones/"

    const clickPut = () => {
        //put
        const id = 2
        const urlPut = urlBase + id 
            //PUT cancion en Lista de canciones
            axios.put({
                method: 'put',
                url: urlPut,
                data: {
                    id: cancion.id,
                    titulo: cancion.titulo,
                    autor: cancion.autor,
                    lanzamiento: cancion.lanzamiento,
                    genero: cancion.genero,
                    urlLetra: cancion.urlLetra
                },
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
    
    const clickPost = () => {
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
            .then ((res) => {
                console.log(res)
            }, (error) => {
                console.log(error)
            })
    }

    const [cancionTraida, setCancionTraida] = useState("")

    const clickGet = () => {
        //get all
        axios(urlBase)
        .then( res => {
            console.log("datos traidos: ", res.data[0])
            setCancionTraida(res.data[0])
        }).catch( e => {
            console.log("Error al traer lista de canciones ", e)
        })
    }

    return (
        <div>
              <input type="button" value="get all" onClick={()=> clickGet()}/> 
               <div>{cancionTraida.titulo}</div>
              <br/> <br></br>
            <input type="button" value="create" onClick={() => clickPost()}/>
            <br/> <br></br>
            <input type="button" value="put" onClick={() => clickPut()}/>
            <br/> <br></br>
            <input type="button" value="delete" onClick={() => clickDelete()}/> 
            
            
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