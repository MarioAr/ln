import React from 'react';
import PropTypes from 'prop-types';

export default function Content(props) {

    const { children } = props;
    
    return (
        <main>
            <div className="lay-sidebar">
                {children}
            </div>
        </main>
    )
}

Content.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired
};