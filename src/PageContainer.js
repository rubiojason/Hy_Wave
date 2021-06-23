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

                <Redirect exact from="/Hy_Wave" to="/HyWave/home" />
                    
                <Route path="/HyWave/home" component={Main} /> 

                <Route path="/HyWave/ocean" component={Ocean} />

                <Route path="/HyWave/resorts" component={Resorts} />

                <Route path="/HyWave/animals" component={Animals} />

            </Switch>
        </BrowserRouter>
    )
}

export default PageContainer
