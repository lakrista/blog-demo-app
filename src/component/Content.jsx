import React from 'react';
import MainImage from "./MainImage";
import {Route, Switch} from "react-router-dom";
import About from "./About";
import LastArticles from "./LastArticles";
import Contact from "./Contact";
import Blog from "./Blog";
import News from "./News";

const Content = (props) => {

    return <div className="content">
        <MainImage/>
        <Switch>
            <Route exact path='/' render={() => <LastArticles articles={props.articles}/>}/>
            <Route path='/blog' component={Blog}/>
            <Route path='/contact' component={News}/>
            <Route exact path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
        </Switch>
    </div>
};

export default Content;