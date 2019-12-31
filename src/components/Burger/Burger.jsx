import React from 'react'
import PropTypes from 'prop-types'
import classes from "./Burger.module.css"
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient"

const Burger = (props) => {
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="Bread-top" />
            <BurgerIngredient type="Salad" />
            <BurgerIngredient type="Cheese" />
            <BurgerIngredient type="Meat" />
            <BurgerIngredient type="Bread-bottom" />
        </div>
    )
}

Burger.propTypes = {

}

export default Burger

