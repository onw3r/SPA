import React, {useState} from 'react';
import {CardButton} from "./CardButton";
import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import './CardStyle.css';
import {setItemPage} from "../../Store/Reducers/Reducers";



function Card({imgUrl, title, description, id , price}) {
    const navigate = useNavigate();
    const dispatchItemPage = useDispatch()
    function handleClick(e){
        dispatchItemPage(setItemPage({imgUrl, title, description, id , price }))
        navigate(`/catalog/item-page/${title}`)
    }

    return (


        <div className="card" onClick={handleClick}>
            <Link to={'item-page'} className={'item-page-link' }>
                <div className={'card-img-wrapper'} >
                    <img className={'card-img'} src={imgUrl} alt={'Watch'} />
                </div>
                <p className={"card-title"}>{title}</p>
                <p className={"card-price"}>{price} руб.</p>

            </Link>
            <div className={'card-btn-container'}>
                <CardButton
                    title={title}
                    imgUrl={imgUrl}
                    description={description}
                    id={id}
                    price={price}


                />
            </div>



        </div>


)
}

export default Card;