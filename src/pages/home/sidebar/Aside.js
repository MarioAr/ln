import React from 'react';
// import PropTypes from 'prop-types';
import '../../../App.css'
import Ranking from '../Ranking';

export default function Aside(props) {

    return (
        <div className="sidebar__aside">
            <div className="banner"></div>
            <Ranking title={`Recetas más leídas`} />
           <div className="banner --desktop --large"></div>
        </div>
    )
}

// Aside.propTypes = {

// }