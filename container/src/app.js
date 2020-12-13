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
        <StylesProvider generateClassName={generateClassNames}>
            <BrowserRouter>
                <Header />
                <MarketingApp />
            </BrowserRouter>
        </StylesProvider>
    );
};

export default App;
