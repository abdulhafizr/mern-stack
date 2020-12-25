import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Home';
import CreateBlog from '../CreateBlog';
import DetailBlog from '../DetailBlog';
import { Footer, Header } from '../../components';
import './index.css';

const MainApp = () => {
    return (
        <Router>
            <div className="app">
                <Header />
                <div className="content">
                <Switch>
                    <Route path="/create-blog">
                        <CreateBlog />
                    </Route>
                    <Route path="/detail-blog">
                        <DetailBlog />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
                </div>
                <Footer />
            </div>
        </Router>
    )
}

export default MainApp
