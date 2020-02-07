// import React from 'react';
import Grid from "../grid/";

import Error from '../error';

const routes = [
    {
        private: false,
        path: '/',
        title: 'Grid',
        component: Grid,
        exact: true
    },
    {
        private: false,
        path: '/error',
        title: 'Error',
        component: Error,
        exact: true
    }
];

export default routes;