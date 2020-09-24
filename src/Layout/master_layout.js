import React, { Component, useState } from "react"
import {Route, Redirect} from 'react-router-dom'

const Master = ({children}) => {
    console.log(children)
    return(
        <duiv>
            {children}
        </duiv>
    )
}

const MasterRoute = ({component: Component, ...others}) =>{
    //const { store, actions } = useContext(Context);
    const [state, setState] = useState({
        currentUser: null
    })
    console.log(Component, "hola", state.currentUser )

    if (state.currentUser == null){
        return(
            <Redirect to="/entrada"/>
        )
    }

    return(
        <Route {...others} render={(props)=>(
            <Master>
                <Component {...props}/>
            </Master>
        )}/>
    )
}

export default MasterRoute;