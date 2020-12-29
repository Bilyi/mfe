import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

const generateClassNames = createGenerateClassName({
    productionPrefix: 'mark'
});

export default ({ history }) => {
    console.log(history);
    return (
        <div>
            <StylesProvider generateClassName={generateClassNames}>
                <Router history={history} >
                    <Switch>
                        <Route exact path='/pricing' component={Pricing}/>
                        <Route path='/' component={Landing}/>
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    )
}
