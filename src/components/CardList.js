import React from 'react'
import Form from './Form.js';
import Card from './Card.js'

const CardList = ( {cards} ) => {    
    return (
        <div>
            <Form />
            { cards.map(profile => <Card {...profile} />)}
        </div>
    );
}

export default CardList;