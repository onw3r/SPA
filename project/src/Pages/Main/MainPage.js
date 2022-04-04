import React from 'react';
import './Style.css';




function MainPage(){
    return (

        <div  className={'main__page'}>


            <div className={'main'}>
                <div className={'main__content'}>
                        <div className={'main__content-logo'}>
                            <div className={'main__content-brand'}>
                                <div className={'main__content-brand-wrapper'}>Porten</div>
                                <div>
                                     <span className={'main__content-city'}>Санкт-петербург</span>
                                </div>

                            </div>

                        </div>
                    </div>
                <div className={'main__content-description'}>
                    <p className={'main__content-description-text'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Purus interdum purus, est tortor pulvinar ut in.
                        Fringilla a diam enim sed justo, sed iaculis sagittis. Tortor id eu interdum nec ut iaculis.
                        Penatibus ullamcorper ultricies morbi ipsum sem metus pharetra, mi. Tortor nibh magna feugiat id nunc,
                    dui nisl viverra.</p>
                </div>
            </div>


        </div>

    );
};

export default MainPage;
