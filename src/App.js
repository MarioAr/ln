import React from 'react';
// import logo from './logo.svg';
import './App.css';
import GlobalContext from './globalContext';

import Home from './pages/home';

const global = {
    gridTitle: 'Acumulado Grilla',
    date: {
        format: 'simple',
        separator: 'de'
    },
    messages: {
        notFound: 'No se encontraron resultados'
    }
}
function App() {
    
    return (
        <GlobalContext.Provider value={ global }>
            <Home />
        </GlobalContext.Provider>
    );
}

export default App;
