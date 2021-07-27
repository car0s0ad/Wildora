import React, {useEffect, useState} from "react";
import axios from "axios";


const Search = () => {
    const guardarToken = localStorage.getItem("token")
    const autorizacion = "Bearer " + guardarToken
    const [datos, setDatos] = useState("")
   
 
        console.log("La autorizacion es esta: ", autorizacion)
        //const URL = 'https://api.spotify.com/v1/search?q=tania%20bowra&type=artist/';
        const URL = "const URL = 'https://api.spotify.com/v1/me/player/"

        const clickSearch = () => {
            axios({
        method: 'get',
        url: URL,
        headers: {
            'Accept': 'application/json',
            'ContentType': 'application/json',
            'Authorization': autorizacion
        }
        })
        .then(res=>{
            console.log(res.json)
            setDatos(res.data)
        })
        .then (data => console.log("otro console en search",data.items))
        .catch(error=>{
            console.warn("No quiere funcionar :c ", error)
            console.log("datos en search ", datos)
        })
        }
        

    
        return(
                <div>
                    Holi quiero que ande
                    <br></br>
                    <input type="button" value="presione para procesar" onClick={() => clickSearch()}></input>
                </div>
        )
}

export default Search