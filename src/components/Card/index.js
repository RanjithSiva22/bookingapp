import React from 'react';

function Card(props) {
    const { item } = props;
    const { poster_path, overview, title ,id} = item;
    // console.log(key);
    return (
        <div class="card" style={{ margin:"2.5rem", width: "20rem" }}>
            {/* {console.log(key)}; */}
            <img class="card-img-top"
                alt="Movie Name"
                src={`https://image.tmdb.org/t/p/original${poster_path}`} />
            <div class="card-body">
                <h5 class="card-title">{`${title}`}</h5>
                <p class="card-text">{`${overview}`}</p>
                <a href={`/home/${id}`} class="btn btn-primary">more info</a>
            </div>
        </div>
    );
}


export default Card;