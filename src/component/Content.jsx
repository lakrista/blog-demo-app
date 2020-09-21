import React from 'react';
import MainImage from "./MainImage";
import {Route, Switch} from "react-router-dom";
import About from "./About";
import LastArticles from "./LastArticles";
import Contact from "./Contact";

const Content = () => {

    return <div className="content">
        <MainImage/>
        <Switch>
            <Route exact path='/' component={LastArticles}/>
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
        </Switch>
    </div>
};

export default Content;