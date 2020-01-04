import React from 'react'
import classes from "./SideDrawer.module.css"
import Logo from "../../Logo/Logo"
import NavigationItems from "../NavigationItems/NavigationItems"

export default function SideDrawer(props) {
    return (
        <div className={classes.SideDrawer}>
            <Logo/>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
    )
}
