import React from 'react'
//import Aux from "../../hoc/Auxi"
import classes from "./Layout.module.css"

const Layout = (props) => {
    return (
        <div>
            <div>
                Toolbar, SideDrawer, Backdrop
            </div>
            <main className={classes.Content}>
                {props.children}
            </main>
        </div>
    )
}

export default Layout