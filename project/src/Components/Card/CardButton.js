import {useDispatch, useSelector} from "react-redux";
import {setItemInBasket} from "../../Store/Reducers/Reducers";


export const CardButton = ({id, imgUrl, price, title}) => {
    const quantity = 1;
    const itemsInBasket = useSelector(state => state.store.basket)
    const isItemsInBasket = itemsInBasket.some(itemsInBasket => itemsInBasket.id === id)
    const dispatchBasket = useDispatch();
    const handleCLick = (e) =>{
        e.stopPropagation();
        dispatchBasket(setItemInBasket({id, imgUrl, price, title, quantity}))

    }


    return (
        <div className={"card-btn"}>
            <div>
                <button disabled={isItemsInBasket} className={"btn"} onClick={handleCLick}>{isItemsInBasket ? 'Добавлено'  : 'В корзину'}</button>
            </div>
        </div>
    )
}