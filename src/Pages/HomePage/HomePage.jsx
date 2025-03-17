import React from 'react';
import Banner from '../../Components/HomeComponents/Banner/Banner';
import Category from '../../Components/HomeComponents/Category/Category';
import BrandsFilter from '../../Components/HomeComponents/BrandsFilter/BrandsFilter';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <BrandsFilter></BrandsFilter>
        </div>
    );
};

export default HomePage;