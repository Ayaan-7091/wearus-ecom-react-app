import React, { useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainData } from './mainData';
import { useDispatch, useSelector } from 'react-redux';
import { getBannerImages } from '../../../State/Banner/Action';






const MainCarousel = () => {
    const dispatch = useDispatch()
    const {banner} = useSelector(store=>store)
    
    useEffect(() => {
        
        dispatch(getBannerImages())
    }, []);
    
    console.log(banner)
    const items = banner?.images?.map((item)=> <img src={item.image} className='cursor-pointer'  ></img>)

    return(
    <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
        
    />
    )
}


export default MainCarousel