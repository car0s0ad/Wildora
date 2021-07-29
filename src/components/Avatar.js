import React from 'react'
import '../styles/Header.css'
import {Avatar} from "@material-ui/core";
import {useDataLayerValue} from "../data/DataLayer";


function Avatar1() {
    const [{user}] = useDataLayerValue();

    return (
        <div className="header">
            <div className="header__right">
                <Avatar src={user?.images[0]?.url } alt={user?.display_name} />
                <h4>{ user?.display_name }</h4>
            </div>
        </div>
    )
}

export default Avatar1