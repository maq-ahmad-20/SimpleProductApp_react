
import React from "react";
import ListProducts from "./ListProducts";

const DisplayProducts = (props) => {

    const electronicData = props.products.filter((prod) => prod.categeory === 'ElectronicItems')
    const FoodData = props.products.filter((prod) => prod.categeory === 'FoodItems')
    const SkinCareData = props.products.filter((prod) => prod.categeory === 'SkinCare')

    return (
        <div>
            <h1>Products</h1>

            <h1>Electronic Items</h1>
            {electronicData.map((prod) => (<ListProducts deleteListItem={props.deleteListItem} products={prod} key={prod.id} />))}

            <h1>FoodItems</h1>
            {FoodData.map((prod) => (<ListProducts deleteListItem={props.deleteListItem} products={prod} key={prod.id} />))}
            <h1>SkinCare</h1>
            {SkinCareData.map((prod) => (<ListProducts deleteListItem={props.deleteListItem} products={prod} key={prod.id} />))}

        </div>
    )

}


export default DisplayProducts;