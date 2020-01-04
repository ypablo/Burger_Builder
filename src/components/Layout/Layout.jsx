import React from 'react'
//import Aux from "../../hoc/Auxi"
import classes from "./Layout.module.css"
import Toolbar from "../Navigation/Toolbar/Toolbar"

const Layout = (props) => {
    return (
        <React.Fragment>
            <Toolbar/>
            <main className={classes.Content}>
                {props.children}
            </main>
        </React.Fragment>
    )
}

export default Layout