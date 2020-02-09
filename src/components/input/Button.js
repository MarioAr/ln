import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
    const { className, label, onClick } = props;
    
    return <button className={className} onClick={onClick}>{label}</button>
}

Button.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

Button.defaultProps = {
	className: ''
}