import React from 'react';

import './styles.css';

function Card(props) {
    return(
        <div className="card">
            <img src={`https://robohash.org/${props.card.id + 5}?set=set2&size=180x180`} alt={props.card.name} />
            <h2>{ props.card.name }</h2>
            <p>{ props.card.email }</p>
        </div>
    );
}

export default Card;