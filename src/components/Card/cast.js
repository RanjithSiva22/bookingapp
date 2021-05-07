import React from 'react';

function Cast(props) {
    const { cast } = props;
    const {name,profile_path,character } = cast;
    return (
        <div class="card" style={{ margin:"2.5rem", width: "20rem", display: "inline-block" }}>
            <img class="card-img-top"
                alt="Movie Name"
                src={`https://image.tmdb.org/t/p/original/${profile_path}`} height="400px"/>
            <div class="card-body">
                <h5 class="card-title">{`${name}`}</h5>
                <p class="card-text">As {`${character}`}</p>
                {/* <a href={`/home/${id}`} class="btn btn-primary">more info</a> */}
            </div>
        </div>
    );
}


export default Cast;


// .card {
//     display: inline-block;
//   }