import React, { Component } from 'react'
import Aux from "../../hoc/Auxi"
import Burger from "../../components/Burger/Burger"

export default class BurgerBuilder extends Component {
    render() {
        return (
            <Auxi>
                <Burger/>
                <div>Burger Controls</div>
            </Auxi>
        )
    }
}
