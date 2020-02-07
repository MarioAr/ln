import React from 'react';
import PropTypes from 'prop-types';
import './error.css';

export default function Error(props) {
    
    const { msg } = props;
    
    return <h1 className="error">{msg}</h1>
}

Error.defaultValue = {
    msg: "Error"
}

Error.propTypes = {
    msg: PropTypes.string
}