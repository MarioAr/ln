import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function RouterItem (props) {

    const { path, Component } = props;

    return <Route path={path} render={propsRouter => {
        
        return <Component {...propsRouter} />
    }}  />
}

RouterItem.propTypes = {
    path: PropTypes.string.isRequired,
    Component: PropTypes.func.isRequired,
}