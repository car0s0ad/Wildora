import React, {useState} from 'react'
import '../styles/Header.css'
import SearchIcon from '@material-ui/icons/Search';
import {Avatar, Button} from "@material-ui/core";
import {useDataLayerValue} from "../data/DataLayer";
import SearchData from "./Search"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function Header({ spotify }) {
    const [{user}] = useDataLayerValue();
    const [dataread, setDataread] = useState("")
    const [data, setData] = useState("")
    SearchData(data)

    const datos = () =>{
        setData(dataread);
    }


    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon />
                <input
                    placeholder='Buscar por tema, artista o podcast'
                    type="text" onChange={(e)=>setDataread(e.target.value)}
                    /> 
            </div>
            <Button variant="contained" color="default" onClick={()=>datos()}>Buscar</Button>
            <div className="header__right">
                <Avatar className="avatar" src={user?.images[0]?.url } alt={user?.display_name} />
                <h4>{ user?.display_name }</h4>
            <ArrowDropDownIcon></ArrowDropDownIcon>
            </div>
        </div>
    )
}

export default Header