import React from 'react';
import './styles.css';

function SearchBox(props) {
    return(
        <input className="search-box" type="search" placeholder={props.placeholder} onChange={props.handleChange} />
    );
}

export default SearchBox;