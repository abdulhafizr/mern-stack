import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Home';
import CreateBlog from '../CreateBlog';
import DetailBlog from '../DetailBlog';
import { Footer, Header } from '../../components';
import './index.css';
import Register from '../Register';
import Login from '../Login';

const MainApp = () => {
    return (
        <Router>
            <div className="app">
                <Header />
                    <Switch>
                    <div className="content">
                        <Route path="/create-blog">
                            <CreateBlog />
                        </Route>
                        <Route path="/detail-blog">
                            <DetailBlog />
                        </Route>
                        <Route path="/register">
                            <Register />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route exact path="/">
                            <Home />
                        </Route>
                    </div>
                    </Switch>
                <Footer />
            </div>
        </Router>
    )
}

export default MainApp
