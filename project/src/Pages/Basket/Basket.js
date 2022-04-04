import React, {useEffect, useState} from 'react';
import './BasketStyle.css';
import BasketItem from "./BasketItem";
import {useSelector} from "react-redux";



function Basket (){
    const itemsInCart = useSelector(state => state.store.basket);
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        const firstPrice = itemsInCart.reduce((acc, item)=> {
            return acc + item.price
        }, 0)
        setTotalPrice(firstPrice)
    },  [] )
    function incrementTotal(price) {
        setTotalPrice(origin => origin + price)
    }
    function decrementTotal(price) {
        setTotalPrice(origin => origin - price)
    }
    function check(){
        if(totalPrice === 0){
            return true
        }
    }
    const emptyBasket = <img className={'empty-basket-img'} src={'https://media.istockphoto.com/vectors/empty-shopping-bag-icon-online-business-vector-icon-template-vector-id861576608?k=20&m=861576608&s=612x612&w=0&h=UgHaPYlYrsPTO6BKKTzizGQqFgqEnn7eYK9EOA16uDs='} alt={'Empty Basket'}/>

    return (
        <div className={'page-basket'}>

            <div className={'basket-wrapper'}>
                <h2 className={'basket-header'}>Корзина</h2>
                <div className={'basket-item-wrapper'}>
                    <div className={'items-list'}>

                        { check() ?  emptyBasket : itemsInCart.map((obj, index) =>(
                            <BasketItem
                                title={obj.title}
                                price={obj.price}
                                imgUrl={obj.imgUrl}
                                id={obj.id}
                                key={index}
                                incrementTotal={incrementTotal}
                                decrementTotal={decrementTotal}

                            />
                        ))}
                    </div>
                    <div className={'total-wrapper'}>
                        <div className={'total-price'}>Всего: {totalPrice} руб. </div>
                        <div className={'basket-btn'}>
                            <button className={"buy-btn"}>Оформить заказ</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Basket;