import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Head from '../../components/header/index';
import Grid from '../../components/grid/index';
import Footer from '../../components/footer/index';
import Cast from '../../components/Card/cast';
import styles from './cast.module.css';
//import {text} from '../language/index';


function Info() {
    // const url=window.location.pathname;
    const find = useParams();
    const [video, setVideo] = useState({});
    const [info, setInfo] = useState({});
    const [cast, setCast] = useState([]);
    const [crew, setCrew] = useState('');
    // const caststyle={
    //         overflowX: "scroll",
    //         overflowY: "hidden",
    //         whiteSpace: "nowrap",
    // }
    const castDetails = () => {
        fetch(`https://api.themoviedb.org/3/movie/${find.id}/credits?api_key=a45396cacc99a4038a86636629609de1&language=en-US`)
            .then(res => res.json())
            .then(res => {
                const y = res.cast;

                // console.log(y);
                const scast = y.slice(0, 6);
                setCast(scast);

            })
    }
    const crewDetails = () => {
        fetch(`https://api.themoviedb.org/3/movie/${find.id}/credits?api_key=a45396cacc99a4038a86636629609de1&language=en-US`)
            .then(res => res.json())
            .then(res => {
                const z = res.crew;

                console.log(z);
                const screw = z.find(item => item.job === "Director");
                setCrew(screw.name);
                // console.log(crew);


            })
    }
    const movieDetails = () => {
        fetch(`https://api.themoviedb.org/3/movie/${find.id}?api_key=a45396cacc99a4038a86636629609de1&language=en-US`)
            .then(res => res.json())
            .then(res => {
                const x = res;

                // console.log(x);
                setInfo(x);

            })
    }
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${find.id}/videos?api_key=a45396cacc99a4038a86636629609de1&language=en-US`)
            .then(res => res.json())
            .then(res => {
                const t = res.results[0];

                // console.log(t);
                setVideo(t);

            })
        movieDetails();
        castDetails();
        crewDetails();
        // eslint-disable-next-line
    }, []);

    return (
        <div class="overflow-hidden">
            <Head />
            {/* {alert(crew)} */}
            {/* {alert(find.id)} */}
            {/*jumbotron head*/}
            <div class="jumbotron jumbotron-fluid" style={{ background: "linear-gradient(to top left, #ffff99 0%, #ff9966 100%)" }}>
                <div class="container">
                    <div style={{ marginTop: "2.5rem" }}>
                        <h1 class="display-5 text-primary"><b>{`${info.original_title}`}</b></h1></div>
                    <h1 class="lead">{`${info.tagline}`}</h1>

                </div>
            </div>
            {/* <h3>{`${crew}`}</h3> */}
            {/*grid*/}
            <Grid info={info} cast={cast} crew={crew}/>

            <div className={styles.scrollingwrapper}  style={{background: "linear-gradient(to top left, #ffffff 0%, #66ff33 100%)"}}>
                {cast.map(item => <Cast id={item.id} cast={item} />)}
            </div>


            <div class="container" style={{ padding: "30px" }}>
                <p class="text-break" style={{ textalign: "center" }}>
                    {`${info.overview}`}
                </p>
            </div>
            {/* <iframe class="embed-responsive-item" title="spacce" src={`https://www.youtube.com/embed/${video.key}`} frameborder="0" height="300" width="300" allowFullScreen></iframe> */}


            <div class="row justify-content-center align-items-center" style={{ margin: "20px 0" }}>
                <div class="col-md col-sm border">
                    <div class="embed-responsive embed-responsive-21by9">
                        <iframe class="embed-responsive-item" title="spacce" src={`https://www.youtube.com/embed/${video.key}`} frameborder="0" height="300" width="300" allowFullScreen></iframe>
                    </div>
                    <strong style={{fontSize:"30px"}}>{`${video.name}`}</strong>
                </div>
            </div>
            {/*about movie*/}

            <Footer />

        </div>




    );
}
export default Info;