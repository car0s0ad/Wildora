import React, {useEffect, useState} from "react";
import axios from "axios";


const Search = () => {
    const guardarToken = localStorage.getItem("token")
    const autorizacion = "Bearer " + guardarToken
   
 
    useEffect(() => {

        console.log("La autorizacion es esta: ", autorizacion)
        const URL = 'https://api.spotify.com/v1/search?q=tania%20bowra&type=artist';
        axios({
        method: 'get',
        url: URL,
        headers: {
            Accept: 'application/json',
            //ContentType: 'application/json',
            Authorization: autorizacion
        }
        })
        .then(res=>{
            console.log(res)
        })
        .catch(error=>{
            console.warn("No quiere funcionar :c ", error)
        })
    }, [autorizacion])
    
        return(
                <div>
                    Holi quiero que ande
                </div>
        )
}

export default Search