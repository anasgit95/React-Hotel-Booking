import React from 'react'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import App from './App'
import Statistique from './views/Statistique'

export default function MainRouter() {
    return ( <
        Router >
        <
        div >
        <
        Route exact path = "/"
        component = {
            App
        }
        /> <
        Route path = "/Statistique"
        component = {
            Statistique
        }
        /> < /
        div > <
        /Router>
    )
}