import React, {useState} from 'react';
import './CatalogStyles.css';
import Card from "../../Components/Card/Card";
import {useSelector} from "react-redux";
import {useDebouncedCallback} from "use-debounce";

function Catalog(){

    const data = useSelector(state => state.store.allWatches);
    const [value, setValue] = useState('');
    const filteredCatalog = data.filter(watches =>{
        return watches.title.toLowerCase().includes(value.toLowerCase())
    })
    const debounced = useDebouncedCallback((value) => {
        setValue(value);
    }, 300)

    return (
        <div className={'page-catalog'}>

            <div className={'catalog-content-wrapper'}>
                <div>
                    <h1 className={'catalog-header'}>Новые поступления</h1>
                    <input
                        type='text'
                        className={'input'}
                        placeholder={'Поиск по каталогу'}
                        onChange={(event) => debounced(event.target.value)}
                    />

                </div>


                <div className={'card-list'} >
                    {filteredCatalog.map((obj,index) =>(
                        <Card title={obj.title}
                              price={obj.price}
                              imgUrl={obj.imgUrl}
                              description={obj.description}
                              id={obj.id}
                              key={index}
                        />
                    ))}

                </div>
            </div>
        </div>
    );
}

export default Catalog;