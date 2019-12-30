import React from 'react'
import Classes from "./BurgerIngredient.module.css"
import classes from './BurgerIngredient.module.css'

 const BurgerIngredient = (props) => {
   let ingredient = null

   switch(props.type) {
       case ("bread-bottm"):
            ingredient = <div className={classes.BreadBottom}></div>
            break
       case ("bread-top"):
            ingredient = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            )
            break
       case ("meat"):
           ingredient = <div className={classes.Meat}></div>
           break
       case("Cheese"):
            ingredient = <div className={classes.Cheese}></div>
            break
       case("Salad"):
            ingredient = <div className={classes.Salad}></div>
            break
       case("Bacon"):   
            ingredient = <div className={classes.Bacon}></div>
            break 
       default:
            ingredient = null    
   }    
}

export default BurgerIngredient