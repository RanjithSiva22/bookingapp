import React from 'react';
import { useState ,useEffect} from 'react';
import Carousel from '../../components/carousel/index';
import Head from '../../components/header/index';
import CustomCard from '../../components/Card/index';
// import { movies } from './data';
import Footer from '../../components/footer/index';


function Home() {
    const [film,setFilm]=useState([]);
    
    useEffect(()=>{
        // const t='';
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=a45396cacc99a4038a86636629609de1&language=en-US&page=1`)
        .then(res=>res.json())
        .then(res=>{
            const t=res.results;
           
            console.log(t);
            setFilm(t);
            
        })
    },[]);
    return (
        <div>
            <Head/>
            {console.log(film[0])}
            <div style={{marginTop:"4rem",marginBottom:"1rem"}}>
            <Carousel />
            </div>
            <h1>POPULAR MOVIES</h1>
            <div className="row">
                {film.map(item => <CustomCard key={item.id} item={item} />)}
            </div>
            <Footer/>

        </div>
    )
}
export default Home;