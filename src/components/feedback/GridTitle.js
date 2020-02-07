import React from 'react';
import PropTypes from 'prop-types';

export default function Tag(props) {
    
    const { title } = props;
    return (
        <div className="com-titleWithfollow hlp-marginBottom-15">
            <h1 className="com-title-section-xl hlp-marginBottom-40">{title}</h1>
        </div>
    )
}

Tag.propTypes = {
    title: PropTypes.string
}