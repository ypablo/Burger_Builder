import React, { Component } from 'react'
//import Auxi from "../../hoc/Auxi"
import Burger from "../../components/Burger/Burger"

export default class BurgerBuilder extends Component {
    render() {
        return (
            <div>
                <Burger />
                <div>Burger Controls</div>
            </div>
        )
    }
}
