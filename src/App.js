import React from 'react';
// import logo from './logo.svg';
import './App.css';
import GlobalContext from './globalContext';

import Home from './pages/home';


function App() {
    
    return (
        <GlobalContext.Provider value={
            {
                gridTitle: 'Acumulado Grilla',
                date: {
                    format: 'simple',
                    separator: 'de'
                },
                messages: {
                    notFound: 'No se encontraron resultados'
                }
            }
        }>
            <Home />
        </GlobalContext.Provider>
    );
}

export default App;
