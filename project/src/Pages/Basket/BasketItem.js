import React, {useState} from 'react';
import {BasketRemoveItemButton} from "./BasketRemoveItemButton";

const BasketItem = ({title, id, price, imgUrl, incrementTotal, decrementTotal}) => {

    const [stock, setStock] = useState(1);
    function increment (){
        if(stock) {
            setStock(origin => ++origin)
            incrementTotal(price)

        }
    }
    function decrement (){
        if(stock !== 1)  {
            setStock(origin => --origin)
            decrementTotal(price)
        }
    }
    const stockPrice = stock * price;


    return (
        <div className={'item'}>
                <div className={'item-img'}>
                    <img src={imgUrl} alt={'itemImg'}/>
                </div>
                <div className={'product-name'}>
                    <div>{title}</div>
                </div>
                <div className={'stock'}>
                    <div>Количество</div>
                    <div className={'stock-change'}>
                        <div className={'stock-remove'}>
                            <button className={'stock-btn'} onClick={decrement}>-</button>
                        </div>
                        <div className={'stock-state'}>
                            <div>{stock} шт.</div>
                        </div>
                        <div className={'stock-add'}>
                            <button className={'stock-btn'} onClick={increment} >+</button>
                        </div>
                    </div>
                </div>
                <div className={'item-price'}>Итого
                    <p>{stockPrice} руб.</p>
                </div>
                <BasketRemoveItemButton
                    id={id}
                    decrementTotal={decrementTotal}
                    price={stockPrice}
                />
        </div>

    );
};

export default BasketItem;