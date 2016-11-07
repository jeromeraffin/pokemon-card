import React, {PropTypes} from 'react';
import Card from './partial/Card';
import './css/Card.css';

export default function CardList(props) {
    const cardNodes = props.list.map(pokemon =>
        <Card
            name={pokemon.name}
            key={pokemon.id}
            number={pokemon.number}
            type={pokemon.type}
        />
    );
    return (
        <section className="CardList">
            {cardNodes}
        </section>
    )
}

CardList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object)
};
