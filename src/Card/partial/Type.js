import React, {PropTypes} from 'react';

import {ElectricIcon, FireIcon, FairyIcon} from './Icons';
import {types} from '../constants';

export default function Type(props) {
    const {type} = props;
    return (
        <span className="Card__type">
            {(() => {
                switch (type) {
                    case 'electric':
                        return <ElectricIcon />
                    case 'fire':
                        return <FireIcon />
                    case'fairy':
                        return <FairyIcon />
                    default:
                        return <div></div>
                }
            }
            )()}
            {type}
        </span>
    );
}

Type.propTypes = {
    type: PropTypes.oneOf(types)
}