import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
    const { className, label } = props;
    
    return <button className={className}>{label}</button>
}

Button.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string.isRequired
}

Button.defaultProps = {
	className: ''
}