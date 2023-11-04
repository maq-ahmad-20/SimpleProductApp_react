
import React, { useState } from "react";
import FormInput from "./FormInput";

const ProductForm = (props) => {

    const [prodId, setProdId] = useState('');
    const [price, setPrice] = useState('')
    const [name, setName] = useState('')
    const [categeory, setcatageory] = useState("ElectronicItems")

    const prodIdChangeHandler = (e) => {

        setProdId(e.target.value)

    }
    const priceChangeHandler = (e) => {
        setPrice(e.target.value)
    }
    const nameChangeHandler = (e) => {
        setName(e.target.value)
    }
    const categeotyHandler = (value) => {
        setcatageory(value)
    }

    const productSubmitHandler = (e) => {

        e.preventDefault();

        const obj = {
            "id": prodId,
            "name": name,
            "price": price,
            "categeory": categeory
        }
        props.getSubmittedProductDetails(obj);

        setName(''); setPrice(''); setProdId('');
    }

    return (

        <div>

            <form onSubmit={productSubmitHandler}>
                <FormInput id="productid" label="ProductID" value={prodId} type="number" onChange={prodIdChangeHandler} />
                <FormInput id="price" label="Price" value={price} type="number" onChange={priceChangeHandler} />
                <FormInput id="name" label="ProductName" value={name} type="text" onChange={nameChangeHandler} />
                <label htmlFor="category">Categeory</label>
                <select id="category" onChange={(e) => { categeotyHandler(e.target.value) }}>
                    <option value="ElectronicItems">ElectronicItems</option>
                    <option value="FoodItems">FoodItems</option>
                    <option value="SkinCare">SkinCare</option>
                </select>
                <button type="submit">AddProduct</button>

            </form>
        </div>
    )
}

export default ProductForm;