import React, {PropTypes} from 'react';
import classNames from 'classnames';

import Type from './Type';
import {types} from '../constants';

export default function Card(props) {
    const {name, number, type} = props;
    const figureClass = classNames(
        'Card__figure',
        type ? `Card__figure--${type}` : ''
    );
    return (
        <article className="Card">
            <figure className={figureClass}>
                <img alt={name} src={`${process.env.PUBLIC_URL}/img/${name}.png`}/>
                <span className="Card__number">n°{number}</span>
            </figure>
            <header className="Card__header">
                <h2 className="Card__name">
                    {name}
                </h2>
                <Type type={type} />
            </header>
        </article>
    );
}

Card.propTypes = {
    name: PropTypes.string,
    number: PropTypes.number,
    type: PropTypes.oneOf(types)
};