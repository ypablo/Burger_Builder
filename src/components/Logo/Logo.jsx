import React from 'react'
import BurgerLogo from "../../assets/images/burger-logo.png"
import classes from "./Logo.module.css"

export default function Logo(props) {
    return (
        <div className={classes.Logo} style={{ height: props.height }}>
            <img src={BurgerLogo} alt="logo" />
        </div >
    )
}
