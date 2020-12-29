import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

const generateClassNames = createGenerateClassName({
    productionPrefix: 'cont'
});

const App = () => {
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassNames}>
                <Header />
                <MarketingApp />
            </StylesProvider>
        </BrowserRouter>
    );
};

export default App;
