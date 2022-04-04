import React from "react";
import {useDispatch} from "react-redux";
import {deleteItemFromBasket} from "../../Store/Reducers/Reducers";


export const BasketRemoveItemButton = ({id, decrementTotal, price}) => {

    const deleteDispatch = useDispatch();
    const handleClick =(e) =>{
        e.stopPropagation();
        deleteDispatch(deleteItemFromBasket(id));
        decrementTotal(price)

    }

    return(
            <button className={'delete-btn'} onClick={handleClick}>X</button>
    )
}