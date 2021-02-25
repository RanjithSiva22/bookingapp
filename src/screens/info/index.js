import React from 'react';
import { useState ,useEffect} from 'react';
import {useParams} from "react-router-dom";
import Head from '../../components/header/index';
import Grid from '../../components/grid/index';
import Footer from '../../components/footer/index';
//import {text} from '../language/index';


function Info(){
    // const url=window.location.pathname;
    const find=useParams();
    const [video,setVideo]=useState({});
    const [info,setInfo]=useState({});
    const movieDetails= ()=>{
        fetch(`https://api.themoviedb.org/3/movie/${find.id}?api_key=a45396cacc99a4038a86636629609de1&language=en-US`)
        .then(res=>res.json())
        .then(res=>{
            const x=res;
           
            console.log(x);
            setInfo(x);
            
        })
    }
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${find.id}/videos?api_key=a45396cacc99a4038a86636629609de1&language=en-US`)
        .then(res=>res.json())
        .then(res=>{
            const t=res.results[0];
           
            console.log(t);
            setVideo(t);
            
        })
        movieDetails();
        // eslint-disable-next-line
    },[]);

    return(
        <div class="overflow-hidden">
        <Head />
        {/* {alert(info)} */}
        {/* {alert(find.id)} */}
        {/*jumbotron head*/}
        <div class="jumbotron jumbotron-fluid" style={{backgroundColor:"#b1cbbb",color:"#fff"}}>
        <div class="container">
            <div style={{marginTop:"2.5rem"}}>
            <h1 class="display-5 text-primary"><b>{`${info.original_title}`}</b></h1></div>
            <p class="lead">{`${info.tagline}`}</p>

        </div>
        </div>

         {/*grid*/}
        <Grid info={info}/>


        <div class="container" style={{padding:"30px"}}>
        <p class="text-break" style={{textalign:"center"}}>
            {`${info.overview}`}
         </p>
        </div> 


        <div class="row justify-content-center align-items-center" style={{margin:"20px 0"}}>
        <div class="col-md col-sm border" style={{padding:"540px 540px"}}>
        <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" title="spacce" src={`https://www.youtube.com/embed/${video.key}`} frameborder="0" height="400" width="400" allowFullScreen></iframe>
        </div>
        <strong>{`${video.name}`}</strong>
        </div>
        </div>
        {/*about movie*/}

        <Footer/>
        
        </div>
        

        
        
    );
}
export default Info;