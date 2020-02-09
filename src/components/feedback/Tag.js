import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Tag(props) {
    
    const { 
        slug,
        text,
        // count
    } = props;
    return (
        <Link to={`tema/${slug}`} className="">{text}</Link>
    )
}
Tag.defaultProps = {
    slug: '',
    text: '',
    count: 0
}

Tag.propTypes = {
    slug: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired
}