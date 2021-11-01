import React from 'react'
import { BrowserRouter } from 'react-router-dom'

export default function RouterWrapper({component:Component, ...props}) {
    return (
        <BrowserRouter>
            <Component {...props} />
        </BrowserRouter>
    )
}