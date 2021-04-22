import React from 'react';
import Card from '../Card';
import './styles.css';

function CardList(props) {
    return(
        <div className="card-list">
            {props.cards.map( card =>
                <Card key={card.id} card={card}></Card>
            )}
        </div>
    );
}

export default CardList;