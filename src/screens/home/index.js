import React from 'react';
import Carousel from '../../components/carousel/index';
import Header from '../../components/header/index';
import CustomCard from '../../components/Card/index';
import { movies } from './data';

function Home() {
    return (
        <div>
            <Header />
            <Carousel />
            <div class="row">
                {movies.map(item => <CustomCard item={item} />)}
            </div>
        </div>
    )
}
export default Home;