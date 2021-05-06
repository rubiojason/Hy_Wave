import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Animals from './work/Animals';
import Main from './work/Main';
import Ocean from './work/Ocean';
import Resorts from './work/Resorts';

function PageContainer() {
    return (
        <BrowserRouter>
            <Switch>

                <Redirect exact from="/" to="/lorem/home" />
                    
                <Route path="/lorem/home" component={Main} /> 

                <Route path="/lorem/ocean" component={Ocean} />

                <Route path="/lorem/resorts" component={Resorts} />

                <Route path="/lorem/animals" component={Animals} />

            </Switch>
        </BrowserRouter>
    )
}

export default PageContainer
