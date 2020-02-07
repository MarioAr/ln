import React from 'react';
import PropTypes from 'prop-types';

export default function Tag(props) {
    
    const { 
        slug,
        text,
        // count
    } = props;
    return (
        <a href={`tema/${slug}`} className="">{text}</a>
    )
}
Tag.defaultValues = {
    slug: '',
    text: '',
    count: 0
}

Tag.propTypes = {
    slug: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired
}