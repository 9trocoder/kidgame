import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import MainLayout from './hoc/mainLayout';
import Home from './component/home';
import Contact from './component/contact';
import Header from './component/header';
import GamesComponent from './component/games';
const Routes = () => (
    <BrowserRouter>
        <Header />
        <MainLayout>
            <Switch>
                <Route path="/about/:id" component={GamesComponent} />
                <Route path="/contact" component={Contact}/>
                <Route path="/" component={Home}/>
            </Switch>
        </MainLayout>
        
    </BrowserRouter>
)

export default Routes;