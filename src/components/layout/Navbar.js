import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {

    const { children } = props;

    // com-nav-mobile

    return (
        <nav className="com-nav-mobile" >
            <div className="row" >
                {children}                
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired
};