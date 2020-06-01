import React from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import { Home } from './components/home/Home';

export const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home}  />
        </Switch>
    </BrowserRouter>

);