import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import CardList from '../CardList';
import SearchBox from '../SearchBox';

function CardListContainer() {
    const [cards, setCards] = useState([]);
    const [searchField, setSearchField] = useState('');
    const filteredCards = cards.filter(card => card.name.toLowerCase().includes(searchField.toLowerCase()));

    useEffect(() => {
        api.get("users").then(response => {
            setCards(response.data);
        });
    }, []);

    return(
        <div className="card-list-container">
            <SearchBox placeholder="name of a monster" handleChange={ e => setSearchField(e.target.value)} />
            <CardList cards={filteredCards} />
        </div>
    );    
}

export default CardListContainer;