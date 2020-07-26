
import React from 'react';

function Card(props) {
    const { item } = props;
    const { image, description, movieName } = item;
    return (
        <div class="card" style={{ width: "18rem" }}>
            <img class="card-img-top"
                alt="Movie Name"
                src={`${image}`} />
            <div class="card-body">
                <h5 class="card-title">{`${movieName}`}</h5>
                <p class="card-text">{`${description}`}</p>
                <a href="/login" class="btn btn-primary">more info</a>
            </div>
        </div>
    );
}


export default Card;