import './ItemPageStyles.css';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {CardButton} from "../../Components/Card/CardButton";




function ItemPage(){
    const info = useSelector(state => state.store.itemPage)
    return(
        <div className={'wrapper'}>

            <div className={'container'}>
                <div className={'product-content'}>
                    <div className={'image-container'}>
                        <img src={info.imgUrl} alt={'Watch'}/>
                    </div>
                    <div className={'item-info'}>
                        <h1 className={'item-title'}>{info.title}</h1>
                        <p>Цена: <br/>
                            {info.price} рублей
                        </p>
                    </div>
                </div>
                <div className={'product-description'}>
                    <h2>Характеристики</h2>
                    <ul>
                        {info.description.map((obj, index) =>(
                            <li key={index}>{obj}</li>
                        ))}
                    </ul>
                </div>
                <div className={'item-page-buttons'}>
                    <div className={'back-btn-container'}>
                        <Link to={'/catalog'} className={'back-link'}>
                            <button className={'back-btn'} >Вернуться в каталог</button>
                        </Link>
                    </div>
                    <div className={'item-basket-btn'}>
                        <CardButton
                            id={info.id}
                            imgUrl={info.imgUrl}
                            price={info.price}
                            title={info.title}
                        />
                    </div>

                </div>

            </div>

        </div>

    )
}

export default ItemPage;