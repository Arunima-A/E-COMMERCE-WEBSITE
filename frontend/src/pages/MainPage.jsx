import React from 'react';
import Navbar from '../components/Navbar';
import { AuthProvider } from '../AuthContext';
import Carousel from '../components/carousel.component';
import BackgroundImage from '../assets/BackgroundImage.jpg';
import ProductList from '../components/ProductList';
import ProductSlider from '../components/ProductSlider';
import UpperProductCard from '../components/UpperProductCard';
const MainPage=()=>{
    let slides=[
        "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200_V3._CB558389732_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/revised/final/Skincare-PCap._CB561353936_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/June/GW/Hero/V1/V2/LightingUNRECPC._CB553693039_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/INSLGW/pc_unrec_refresh._CB555261616_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2024/GW/June/Unrec/166-1._CB555072489_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Sports/June/IYD/GW/Hero/Unrec/yoga_unrec_3000x1200._CB553809853_.png",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Media/BAU/D132995370_Homepage_DesktopHeroTemplate_3000x1200._CB557152260_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG24/Smart_Watches/MED_MAY/Tall_Hero_1500X600_BAU_NewLaunches._CB554931622_.jpg"


    ]
    
    return(
        <div className='bg-slate-100'>
            <Navbar></Navbar>
            
            <div className='w-[100%] m-auto pt-11'>
                <Carousel slides={slides}/>
            </div>
            <h1 className="italic font-bold text-3xl mt-2">Pick Up where you left off</h1>
            <UpperProductCard></UpperProductCard>
            <h1 className="italic font-bold text-3xl mt-20 mb-0">Best Sellers In Kitchen Finds</h1>
            <ProductSlider categoryName="Kitchen Appliances"></ProductSlider>
            <h1 className='italic font-bold text-3xl mt-2'>Best Sellers in Clothing & Accessories</h1>
            <ProductSlider categoryName="Clothes"></ProductSlider>
            <h1 className='italic font-bold text-3xl mt-2'>Best Sellers in Sports and Fitness</h1>
            <ProductSlider categoryName="Sports and Fitness "></ProductSlider>
            <h1 className='italic font-bold text-3xl mt-2'>Best Sellers in Tech Products</h1>
            <ProductSlider categoryName="Tech Products"></ProductSlider>
        </div>
    )
}

export default MainPage;