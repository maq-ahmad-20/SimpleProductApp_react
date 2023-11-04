import React, { useState } from "react";
const ListProducts = (props) => {

    const [deleteItemList, setDeleteListItem] = useState(props.products)

    const deleteItem = (e) => {
        console.log(e.target.id)

        setDeleteListItem(e.target.id)

        props.deleteListItem(deleteItemList)

    }


    return (
        <React.Fragment>
            <li >
                ( productId : {props.products.id} ) ( ProductName : {props.products.name}) ( price : {props.products.price})

                <button onClick={deleteItem} id={deleteItemList} categerory={props.products.categerory}>Delete</button>
            </li>

        </React.Fragment>

    )


}

export default ListProducts;